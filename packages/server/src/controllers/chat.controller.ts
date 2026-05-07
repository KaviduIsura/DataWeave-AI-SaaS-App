import type { Request, Response } from 'express';
import { openai } from '../config/openai';
import Chat from '../models/Chat';

export const chatCompletion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { messages, model = 'gpt-3.5-turbo' } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'Messages array is required' });
      return;
    }

    const completion = await openai.chat.completions.create({
      model,
      messages,
    });

    res.json({
      message: completion.choices[0]?.message,
      usage: completion.usage,
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

export const chatStream = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { messages, model = 'gpt-3.5-turbo', chatId } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'Messages array is required' });
      return;
    }

    // Identify user message
    const userMessage = messages[messages.length - 1];

    let chatDoc;
    if (chatId) {
      chatDoc = await Chat.findOne({ _id: chatId, user: req.user._id });
      if (!chatDoc) {
        res.status(404).json({ error: 'Chat not found' });
        return;
      }
      chatDoc.messages.push(userMessage);
      await chatDoc.save();
    } else {
      // Create new chat
      chatDoc = await Chat.create({
        user: req.user._id,
        title:
          userMessage.content.slice(0, 40) +
          (userMessage.content.length > 40 ? '...' : ''),
        messages: [userMessage],
      });
    }

    const stream = await openai.chat.completions.create({
      model,
      messages,
      stream: true,
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send the Chat ID to the client first so it knows what to use for subsequent messages
    res.write(
      `data: ${JSON.stringify({ type: 'chatId', chatId: chatDoc._id })}\n\n`
    );

    let fullAssistantResponse = '';

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        fullAssistantResponse += content;
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    // Save assistant message to history
    if (fullAssistantResponse) {
      chatDoc.messages.push({
        role: 'assistant',
        content: fullAssistantResponse,
      });
      await chatDoc.save();
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error: any) {
    console.error('Error in /api/chat/stream:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }
};
