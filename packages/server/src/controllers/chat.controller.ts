import type { Request, Response } from 'express';
import { openai } from '../config/openai';

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
    const { messages, model = 'gpt-3.5-turbo' } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'Messages array is required' });
      return;
    }

    const stream = await openai.chat.completions.create({
      model,
      messages,
      stream: true,
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
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
