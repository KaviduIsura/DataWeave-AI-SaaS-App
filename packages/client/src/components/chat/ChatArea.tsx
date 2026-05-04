import {
  ChevronDown,
  Share,
  Layout,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCcw,
  Sparkles,
  User,
  Plus,
  Paperclip,
  Mic,
  Link2,
  MoreHorizontal,
} from 'lucide-react';

interface ChatAreaProps {
  isFullWidth?: boolean;
}

export default function ChatArea({ isFullWidth = false }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#0B0D14] h-full min-h-0 relative transition-colors duration-300">
      {/* Top Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="h-16 px-6 flex items-center justify-between z-10">
        <div className="flex-1"></div>
        {/* Date Badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 flex items-center justify-center w-full max-w-2xl px-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-slate-300 dark:to-white/30"></div>
          <div className="px-4 py-1.5 mx-4 rounded-full border border-slate-300 dark:border-white/80 bg-white/80 dark:bg-[#0E121A]/80 backdrop-blur-sm text-xs text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap shadow-sm dark:shadow-none transition-colors">
            Today
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-300 dark:from-white/30 to-transparent"></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className={`flex-1 overflow-y-auto px-6 py-6 z-10 flex flex-col gap-8 mx-auto w-full transition-all duration-300 ${isFullWidth ? 'max-w-none px-12 lg:px-24' : 'max-w-5xl'} [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-white/20`}
      >
        {/* User Message */}
        <div className="flex justify-end gap-4 w-full">
          <div className="flex flex-col items-end gap-2 max-w-[80%]">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mr-2">
              You
            </span>
            <div className="bg-blue-50 dark:bg-[#1C2130] border border-blue-100 dark:border-white/5 rounded-2xl rounded-tr-sm px-5 py-3 text-slate-900 dark:text-white text-sm leading-relaxed transition-colors">
              make the subhead line from "Time Tracker Dashboard"
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AI Message */}
        <div className="flex gap-4 w-full">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col items-start gap-2 max-w-[80%]">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-2">
              DataWave
            </span>
            <div className="bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/5 rounded-2xl rounded-tl-sm px-6 py-5 text-slate-900 dark:text-white text-sm leading-relaxed w-full shadow-sm dark:shadow-none transition-colors">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-base">
                "Time Tracker Dashboard"
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                Effortlessly Manage and Optimize Your Time for Maximum
                Productivity
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-500 bg-slate-200 dark:bg-black/20 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/5">
                  NokatFlex <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Message 2 */}
        <div className="flex justify-end gap-4 w-full">
          <div className="flex flex-col items-end gap-2 max-w-[80%]">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 mr-2">
              You
            </span>
            <div className="bg-blue-50 dark:bg-[#1C2130] border border-blue-100 dark:border-white/5 rounded-2xl rounded-tr-sm px-5 py-3 text-slate-900 dark:text-white text-sm leading-relaxed transition-colors">
              Make short paragraphs under this title "Time Tracker Dashboard"
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AI Message 2 */}
        <div className="flex gap-4 w-full pb-8">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col items-start gap-2 max-w-[80%]">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-2">
              DataWave
            </span>
            <div className="bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/5 rounded-2xl rounded-tl-sm px-6 py-5 text-slate-900 dark:text-white text-sm leading-relaxed w-full shadow-sm dark:shadow-none transition-colors">
              <p className="text-slate-700 dark:text-slate-300">
                The Time Tracker Dashboard is a powerful tool designed to help
                individuals and teams monitor and manage their time efficiently.
                It provides a centralized interface to track hours spent on
                tasks, projects, and activities, ensuring better productivity
                and time utilization.
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-500 bg-white shadow-sm dark:bg-black/20 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
                  Nokat 2.0 <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div
        className={`p-6 mx-auto w-full z-10 pb-8 transition-all duration-300 ${isFullWidth ? 'max-w-none px-12 lg:px-24' : 'max-w-5xl'}`}
      >
        <div className="bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-2xl p-2 relative shadow-lg transition-colors">
          <textarea
            placeholder="How can I support you?"
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none outline-none px-4 pt-4 pb-12 min-h-[120px] text-sm"
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
              {/* Paperclip Button with gradient border */}
              <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                <div className="bg-white dark:bg-[#131722] rounded-lg">
                  <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <Paperclip className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Mic Button with gradient border */}
              <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                <div className="bg-white dark:bg-[#131722] rounded-lg">
                  <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Link2 Button with gradient border */}
              <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                <div className="bg-white dark:bg-[#131722] rounded-lg">
                  <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                    <Link2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-slate-500 dark:text-slate-600">
          Nokat 2025. all Rights Reserved
        </div>
      </div>
    </div>
  );
}
