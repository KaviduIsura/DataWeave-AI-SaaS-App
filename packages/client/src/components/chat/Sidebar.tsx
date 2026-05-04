import { useState } from 'react';
import {
  LucideImages,
  Compass,
  Search,
  AudioLines,
  SquarePlay,
  LayoutGrid,
  HelpCircle,
  Settings,
  User,
  Plus,
  MessageSquare,
  Sparkles,
  Sun,
  Moon,
  X,
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

interface SidebarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
  activeView?:
    | 'chat'
    | 'new_chat'
    | 'browse'
    | 'image_generation'
    | 'voice_generation';
  onNavigate?: (
    view:
      | 'chat'
      | 'new_chat'
      | 'browse'
      | 'image_generation'
      | 'voice_generation'
  ) => void;
}

export default function Sidebar({
  isDarkMode = true,
  toggleTheme,
  activeView,
  onNavigate,
}: SidebarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      icon: Compass,
      action: () => onNavigate?.('browse'),
      isActive: activeView === 'browse',
    },
    {
      icon: LucideImages,
      action: () => onNavigate?.('image_generation'),
      isActive: activeView === 'image_generation',
    },
    {
      icon: AudioLines,
      action: () => onNavigate?.('voice_generation'),
      isActive: activeView === 'voice_generation',
    },
    {
      icon: Search,
      action: () => setIsSearchOpen(true),
      isActive: isSearchOpen,
    },
    { icon: SquarePlay, action: () => {} },
    { icon: LayoutGrid, action: () => {} },
  ];

  return (
    <>
      <div className="p-3 h-screen">
        <div className="flex h-full shrink-0 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-white/10 p-2">
          {/* Rail Navigation */}
          <div className="w-[60px] flex flex-col items-center py-2 border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0A0D14] rounded-l-lg">
            <div className="flex-1 flex flex-col items-center gap-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="w-full h-px bg-slate-200 dark:bg-white/10" />

              {/* Nav Icons */}
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`relative p-[1px] rounded-md shadow-md ${item.isActive ? 'bg-blue-500' : 'bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50'}`}
                  >
                    <div className="w-8 h-8 bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-[#0f141c] dark:to-slate-800 flex items-center justify-center rounded-md">
                      <button
                        onClick={item.action}
                        className={`p-2 rounded-lg transition-colors ${item.isActive ? 'text-blue-500 dark:text-blue-400 bg-slate-200 dark:bg-white/10' : 'text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/5'}`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr className="border-t border-slate-200 dark:border-white/10 mx-5 mb-3 w-full max-w-[24px]" />

            <div className="flex flex-col items-center gap-4 mt-auto">
              {/* Theme Toggle Button */}
              <div className="relative p-[1px] rounded-md bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                <div className="w-8 h-8 bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-[#0f141c] dark:to-slate-800 flex items-center justify-center rounded-md">
                  <button
                    onClick={toggleTheme}
                    className="p-2 text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
                  >
                    {isDarkMode ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Other Bottom Icons */}
              {[HelpCircle, Settings, User].map((Icon, idx) => (
                <div
                  key={idx}
                  className="relative p-[1px] rounded-md bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md"
                >
                  <div className="w-8 h-8 bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-[#0f141c] dark:to-slate-800 flex items-center justify-center rounded-md">
                    <button className="p-2 text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                      <Icon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Sidebar Panel */}
          <div className="w-[280px] flex flex-col h-full bg-slate-50 dark:bg-[#0E121A] border border-slate-200 dark:border-white/5 rounded-r-lg">
            <div className="p-4 flex items-center justify-between">
              <span className="font-semibold text-slate-900 dark:text-white text-lg tracking-tight">
                DataWave
              </span>
              <div className="border border-slate-200 dark:border-white/5 h-8 w-12 rounded-full flex items-center justify-center bg-white dark:bg-transparent">
                <span className="text-xs text-slate-600 dark:text-white font-mono">
                  v1.20
                </span>
              </div>
            </div>
            <hr className="border-t border-slate-200 dark:border-white/10 mx-5 mb-3" />

            <div className="px-4 pb-4 flex flex-col gap-2">
              <button
                onClick={() => onNavigate?.('new_chat')}
                className={`w-full hover:bg-slate-300 dark:hover:bg-[#1E232E] text-slate-800 dark:text-white flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-colors ${activeView === 'new_chat' ? 'bg-slate-300 dark:bg-[#1E232E] border-slate-400 dark:border-white/20' : 'bg-slate-200 dark:bg-[#1a2130] border-slate-300 dark:border-white/10'}`}
              >
                <Plus className="w-4 h-4" />
                <span className="font-medium text-sm">Add new chat</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
              {/* Today */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
                  Today
                </h3>
                <div className="space-y-0.5">
                  {chatHistory.today.map((chat) => (
                    <button
                      key={chat.id}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/5 transition-colors text-left bg-white dark:bg-white/5"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0 text-slate-500 dark:text-white" />
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
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors text-left"
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
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <span className="truncate flex-1">{chat.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Upgrade Card */}
            <div className="p-3 mt-auto">
              <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#161B26] dark:to-[#0A0D14] border border-slate-200 dark:border-white/10 rounded-xl p-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl transform translate-x-8 -translate-y-8"></div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white text-xs">
                    Upgrade Your Plan
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug mb-3">
                  Unlock premium features, faster responses, and enhanced AI
                  capabilities.
                </p>
                <button className="w-full py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg text-xs font-medium transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                  Upgrade Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white dark:bg-[#0E121A] border border-slate-200 dark:border-white/10 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden relative mx-4">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm w-full"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 ml-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 min-h-[200px] flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm">
              No recent searches
            </div>
          </div>
        </div>
      )}
    </>
  );
}
