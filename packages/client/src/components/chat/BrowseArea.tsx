import { useRef, useState } from 'react';
import {
  Compass,
  Paperclip,
  Mic,
  Link2,
  MoreHorizontal,
  Send,
} from 'lucide-react';

const browseSampleTexts = [
  'Latest AI news',
  'Stock market trends today',
  'Weather forecast for Tokyo',
  'Best productivity tools 2025',
];

export default function BrowseArea() {
  const [input, setInput] = useState('');
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!input.trim()) return;
    console.log('Search:', input);
    setInput('');
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 w-full max-w-4xl mx-auto">
        {/* Welcome Greeting */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-6">
            <Compass className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            What would you like to search for?
          </h1>
        </div>

        {/* Input Area (Centered) */}
        <div className="w-full mb-6">
          <div className="bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-2xl p-2 relative shadow-2xl shadow-blue-500/5 transition-colors">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search the web..."
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none outline-none px-4 pt-4 pb-12 min-h-[140px] text-base"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              {/* MoreHorizontal Button with Dropdown */}
              <div className="relative">
                <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md z-10">
                  <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-[#1C2130]/80 transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* More Options Dropdown */}
                {isMoreOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-0"
                      onClick={() => setIsMoreOpen(false)}
                    />
                    <div className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-xl shadow-xl z-20 py-2 overflow-hidden">
                      <button className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                        Clear Conversation
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                        Export Chat
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                        Settings
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {input.length > 0 ? (
                  /* Send Button */
                  <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 shadow-md ml-2 transition-all">
                    <div className="bg-blue-600 rounded-lg">
                      <button
                        onClick={handleSubmit}
                        className="p-2 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 transition-all">
                    {/* Hidden File Input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      multiple
                    />

                    {/* Paperclip Button */}
                    <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                      <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
                        >
                          <Paperclip className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Mic Button */}
                    <div
                      className={`relative p-[1px] rounded-lg shadow-md transition-all ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50'}`}
                    >
                      <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                        <button
                          onClick={() => setIsRecording(!isRecording)}
                          className={`p-2 rounded-lg transition-colors ${isRecording ? 'text-red-500 bg-red-50 dark:bg-red-500/10' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'}`}
                        >
                          <Mic className="w-4 h-4" />
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
          {browseSampleTexts.map((text, idx) => (
            <button
              key={idx}
              className="px-4 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-sm dark:shadow-none"
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
