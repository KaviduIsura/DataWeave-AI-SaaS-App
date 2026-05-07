import { useState } from 'react';
import {
  Sparkles,
  Paperclip,
  Mic,
  Link2,
  MoreHorizontal,
  Send,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addMessage,
  setThinking,
  updateMessage,
  setActiveChatId,
  fetchChats,
} from '../../store/slices/chatSlice';
import { setActiveView } from '../../store/slices/uiSlice';

const sampleTexts = [
  'Analyze my dataset',
  'Write a Python script',
  'Summarize meeting notes',
  'Brainstorm marketing ideas',
];

interface NewChatAreaProps {
  isFullWidth?: boolean;
}

export default function NewChatArea({ isFullWidth = false }: NewChatAreaProps) {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const { isThinking, selectedModel } = useAppSelector((state) => state.chat);
  const { user } = useAppSelector((state) => state.auth);
  const token = user?.token;

  const handleSubmit = async () => {
    if (!input.trim() || isThinking) return;

    const userMessage = input.trim();
    setInput('');

    // Switch view to chat area immediately
    dispatch(setActiveView('chat'));

    // 1. Add user message
    const userId = Date.now().toString();
    dispatch(
      addMessage({
        id: userId,
        role: 'user',
        content: userMessage,
      })
    );

    // 2. Set thinking state
    dispatch(setThinking(true));

    // 3. Add temporary assistant message
    const assistantId = (Date.now() + 1).toString();
    dispatch(
      addMessage({
        id: assistantId,
        role: 'assistant',
        content: '',
      })
    );

    try {
      // Create fresh message array for the API call since Redux state might not be fully flushed here
      const apiMessages = [{ role: 'user', content: userMessage }];

      const response = await fetch('http://localhost:3000/api/chat/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          messages: apiMessages,
          model: selectedModel,
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      if (!response.body) throw new Error('ReadableStream not supported');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessageContent = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;

            try {
              const parsed = JSON.parse(data);
              if (parsed.type === 'chatId' && parsed.chatId) {
                dispatch(setActiveChatId(parsed.chatId));
                dispatch(fetchChats()); // Refresh sidebar
              } else if (parsed.content) {
                dispatch(
                  updateMessage({
                    id: assistantId,
                    content: parsed.content,
                  })
                );
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      dispatch(
        updateMessage({
          id: assistantId,
          content:
            '\n\n**Error:** Sorry, there was an issue connecting to the server.',
        })
      );
    } finally {
      dispatch(setThinking(false));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#0B0D14] h-full min-h-0 relative transition-colors duration-300">
      {/* Top Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Centered Content Area */}
      <div
        className={`flex-1 flex flex-col items-center justify-center px-6 z-10 w-full mx-auto transition-all duration-300 ${isFullWidth ? 'max-w-none px-12 lg:px-24' : 'max-w-4xl'}`}
      >
        {/* Welcome Greeting */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            How can I help you today?
          </h1>
        </div>

        {/* Input Area (Centered) */}
        <div className="w-full mb-6">
          <div className="bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-2xl p-2 relative shadow-2xl shadow-blue-500/5 transition-colors">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isThinking}
              placeholder={
                isThinking
                  ? 'DataWave is thinking...'
                  : 'How can I support you?'
              }
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none outline-none px-4 pt-4 pb-12 min-h-[140px] text-base disabled:opacity-50"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              {/* MoreHorizontal Button with gradient border */}
              <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                <div className="bg-white dark:bg-[#131722] rounded-lg">
                  <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-[#1C2130]/80 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {input.length > 0 ? (
                  /* Send Button */
                  <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 shadow-md ml-2 transition-all">
                    <div className="bg-blue-600 rounded-lg">
                      <button
                        onClick={handleSubmit}
                        disabled={isThinking}
                        className="p-2 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600 flex items-center justify-center"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 transition-all">
                    {/* Paperclip Button */}
                    <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                      <div className="bg-white dark:bg-[#131722] rounded-lg">
                        <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                          <Paperclip className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Mic Button */}
                    <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                      <div className="bg-white dark:bg-[#131722] rounded-lg">
                        <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                          <Mic className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Link2 Button */}
                    <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                      <div className="bg-white dark:bg-[#131722] rounded-lg">
                        <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                          <Link2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sample Texts */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {sampleTexts.map((text, idx) => (
            <button
              key={idx}
              className="px-4 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-sm dark:shadow-none"
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="pb-8 text-center text-xs text-slate-500 dark:text-slate-600 shrink-0">
        Nokat 2025. all Rights Reserved
      </div>
    </div>
  );
}
