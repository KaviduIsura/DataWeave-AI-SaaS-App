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

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col bg-[#0B0D14] h-screen relative">
      {/* Top Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="h-16 px-6 flex items-center justify-between z-10">
        <div className="flex-1"></div>
        {/* Date Badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-[#131722]/80 backdrop-blur-sm text-xs text-slate-400 font-medium">
            Today
          </div>
        </div>
        {/* Top Right Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-[#131722] hover:bg-[#1C2130] transition-colors text-white text-sm font-medium">
            NokatGPT+
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2.5 rounded-xl border border-white/10 bg-[#131722] hover:bg-[#1C2130] transition-colors text-slate-400 hover:text-white">
            <Share className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-xl border border-white/10 bg-[#131722] hover:bg-[#1C2130] transition-colors text-slate-400 hover:text-white">
            <Layout className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 z-10 flex flex-col gap-8 max-w-4xl mx-auto w-full">
        {/* User Message */}
        <div className="flex justify-end gap-4 w-full">
          <div className="flex flex-col items-end gap-2 max-w-[80%]">
            <span className="text-sm font-medium text-slate-300 mr-2">You</span>
            <div className="bg-[#1C2130] border border-white/5 rounded-2xl rounded-tr-sm px-5 py-3 text-white text-sm leading-relaxed">
              make the subhead line from "Time Tracker Dashboard"
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0 overflow-hidden">
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
            <span className="text-sm font-medium text-slate-300 ml-2">
              DataWave
            </span>
            <div className="bg-[#131722] border border-white/5 rounded-2xl rounded-tl-sm px-6 py-5 text-white text-sm leading-relaxed w-full">
              <h4 className="font-semibold text-white mb-2 text-base">
                "Time Tracker Dashboard"
              </h4>
              <p className="text-slate-300">
                Effortlessly Manage and Optimize Your Time for Maximum
                Productivity
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                  NokatFlex <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Message 2 */}
        <div className="flex justify-end gap-4 w-full">
          <div className="flex flex-col items-end gap-2 max-w-[80%]">
            <span className="text-sm font-medium text-slate-300 mr-2">You</span>
            <div className="bg-[#1C2130] border border-white/5 rounded-2xl rounded-tr-sm px-5 py-3 text-white text-sm leading-relaxed">
              Make short paragraphs under this title "Time Tracker Dashboard"
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0 overflow-hidden">
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
            <span className="text-sm font-medium text-slate-300 ml-2">
              DataWave
            </span>
            <div className="bg-[#131722] border border-white/5 rounded-2xl rounded-tl-sm px-6 py-5 text-white text-sm leading-relaxed w-full">
              <p className="text-slate-300">
                The Time Tracker Dashboard is a powerful tool designed to help
                individuals and teams monitor and manage their time efficiently.
                It provides a centralized interface to track hours spent on
                tasks, projects, and activities, ensuring better productivity
                and time utilization.
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors">
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                  Nokat 2.0 <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 max-w-4xl mx-auto w-full z-10 pb-8">
        <div className="bg-[#131722] border border-white/10 rounded-2xl p-2 relative shadow-lg">
          <textarea
            placeholder="How can I support you?"
            className="w-full bg-transparent text-white placeholder-slate-500 resize-none outline-none px-4 pt-4 pb-12 min-h-[120px] text-sm"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button className="p-2 text-slate-400 hover:text-white rounded-lg border border-white/10 bg-[#1C2130] transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                <Mic className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white rounded-lg border border-white/10 bg-[#1C2130] transition-colors">
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-slate-600">
          Nokat 2025. all Rights Reserved
        </div>
      </div>
    </div>
  );
}
