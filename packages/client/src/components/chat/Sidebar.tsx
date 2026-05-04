import {
  Home,
  Compass,
  History,
  Volume2,
  SquarePlay,
  LayoutGrid,
  HelpCircle,
  Settings,
  User,
  Plus,
  MessageSquare,
  Sparkles,
  MoreHorizontal,
} from 'lucide-react';

const chatHistory = {
  today: [{ id: 1, title: 'Make 10 others sentences...' }],
  yesterday: [
    { id: 2, title: 'Give the attrition rate from...' },
    { id: 3, title: 'Generate trucking americ...' },
    { id: 4, title: 'Trade over-the-counter (...)' },
    { id: 5, title: 'make another sentence l...' },
    { id: 6, title: 'make an image about dino...' },
    { id: 7, title: 'combine these two parag...' },
  ],
  previous: [
    { id: 8, title: 'shorten this paragraph "W...' },
    { id: 9, title: "you're a social media spec..." },
    { id: 10, title: 'Make a title for slide 5 "you...' },
  ],
};

export default function Sidebar() {
  return (
    <div className="flex h-screen shrink-0 bg-[#0A0D14] text-slate-300">
      {/* Rail Navigation */}
      <div className="w-[60px] flex flex-col items-center py-6 border-r border-white/5 bg-[#0A0D14]">
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <Home className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <Compass className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <History className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <SquarePlay className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 mt-auto">
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Sidebar Panel */}
      <div className="w-[280px] flex flex-col h-full bg-[#0E121A] border-r border-white/5">
        <div className="p-5 flex items-center justify-between">
          <span className="font-semibold text-white text-lg tracking-tight">
            Nokat AI
          </span>
          <span className="text-xs text-slate-500 font-mono">v1.20</span>
        </div>

        <div className="px-4 pb-4">
          <button className="w-full bg-[#181C25] hover:bg-[#1E232E] text-white flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="font-medium text-sm">Add new chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4">
          {/* Today */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
              Today
            </h3>
            <div className="space-y-0.5">
              {chatHistory.today.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors text-left bg-white/5"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-slate-400" />
                  <span className="truncate flex-1">{chat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Yesterday */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
              Yesterday
            </h3>
            <div className="space-y-0.5">
              {chatHistory.yesterday.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors text-left"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="truncate flex-1">{chat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Previous */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
              Previous
            </h3>
            <div className="space-y-0.5">
              {chatHistory.previous.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors text-left"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="truncate flex-1">{chat.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-b from-[#161B26] to-[#0A0D14] border border-white/10 rounded-2xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white text-sm">
                Upgrade Your Plan
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Unlock premium features, faster responses, and enhanced
              capabilities of AI
            </p>
            <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              Upgrade Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
