import { useState } from 'react';
import {
  X,
  Sparkles,
  ChevronDown,
  Layout,
  Share,
  Link2,
  Mail,
} from 'lucide-react';

const historyTimeline = [
  {
    id: 1,
    type: 'ai',
    title:
      'The Time Tracker Dashboard is a powerful tool designed to help individu...',
    action: 'Generated',
    time: '08:34 AM',
  },
  {
    id: 2,
    type: 'user',
    title: 'Make short paragraphs under this title "Time Tracker Dashboard"',
    action: 'Requested',
    time: '08:34 AM',
  },
  {
    id: 3,
    type: 'ai',
    title:
      'The Time Tracker Dashboard is a powerful tool designed to help individu...',
    action: 'Generated',
    time: '07:21 AM',
  },
  {
    id: 4,
    type: 'user',
    title: 'make the subhead line from "Time Tracker Dashboard"',
    action: 'Requested',
    time: '07:21 AM',
  },
  {
    id: 5,
    type: 'ai',
    title:
      '"Brand Tone & Style: Casual, fun, & witty - Keep it lighthearted and engaging.',
    action: 'Generated',
    time: 'Feb 20, 02:12 AM',
  },
  {
    id: 6,
    type: 'user',
    title: "Generate brand tone from this guideline that I've attached",
    action: 'Requested',
    time: 'Feb 20, 02:12 AM',
  },
  {
    id: 7,
    type: 'ai',
    title:
      'New to crypto? Learn the basics of blockchain, wallets, and trading. Step...',
    action: 'Generated',
    time: 'Feb 20, 02:12 AM',
  },
];

interface HistoryPanelProps {
  isCollapsed?: boolean;
  onToggleLayout?: () => void;
}

export default function HistoryPanel({
  isCollapsed = false,
  onToggleLayout,
}: HistoryPanelProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <div
        className={`shrink-0 p-3 flex flex-col h-screen gap-3 transition-all duration-300 ${isCollapsed ? 'w-fit absolute top-0 right-0 z-10' : 'w-[340px] relative'}`}
      >
        {/* Top Right Actions */}
        <div className="flex items-center justify-end gap-2">
          {/* WaveGPT+ Button with gradient border */}
          <div className="relative p-[1px] rounded-xl bg-gradient-to-t from-slate-200 via-slate-300 to-slate-400 dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-[#0f141c] dark:to-slate-800 hover:bg-slate-300 dark:hover:bg-[#1C2130] transition-colors text-slate-900 dark:text-white text-sm font-medium">
              WaveGPT+
              <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>
          </div>

          {/* Share Button with gradient border */}
          <div className="relative p-[1px] rounded-md bg-gradient-to-t from-slate-200 via-slate-300 to-slate-400 dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
            <div className="w-8 h-8 bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-[#0f141c] dark:to-slate-800 flex items-center justify-center rounded-md">
              <button
                onClick={() => setIsShareOpen(true)}
                className="p-2 text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
              >
                <Share className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Layout Button with gradient border */}
          <div className="relative p-[1px] rounded-md bg-gradient-to-t from-slate-200 via-slate-300 to-slate-400 dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
            <div className="w-8 h-8 bg-gradient-to-tr from-slate-50 to-slate-200 dark:from-[#0f141c] dark:to-slate-800 flex items-center justify-center rounded-md">
              <button
                onClick={onToggleLayout}
                className="p-2 text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
              >
                <Layout className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* History Panel */}
        {!isCollapsed && (
          <div className="p-1 rounded-lg border border-slate-200 dark:border-white/10 flex-1 flex flex-col min-h-0 bg-white/50 dark:bg-transparent">
            <div className="flex-1 w-full bg-slate-50 dark:bg-[#0E121A] flex flex-col rounded-md border border-slate-200 dark:border-white/10 overflow-hidden min-h-0 transition-colors">
              <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-white/5 ">
                <h2 className="text-slate-900 dark:text-white font-medium">
                  History
                </h2>
                <button
                  onClick={onToggleLayout}
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                <div className="relative border-l border-slate-300 dark:border-white/10 ml-4 space-y-8 pb-8  ">
                  {historyTimeline.map((item, index) => (
                    <div key={item.id} className="relative pl-6">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-50 dark:bg-[#0E121A] flex items-center justify-center transition-colors">
                        {item.type === 'ai' ? (
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <img
                              src="https://i.pravatar.cc/100?img=11"
                              alt="User"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            {item.type === 'ai' ? 'DataWave' : 'You'}
                          </span>
                          <span className="text-xs text-slate-500">
                            • {item.time}
                          </span>
                        </div>
                        <p className="text-sm text-slate-900 dark:text-white leading-relaxed mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                          {item.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Share Modal */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white dark:bg-[#0E121A] border border-slate-200 dark:border-white/10 w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Share Chat
              </h3>
              <button
                onClick={() => setIsShareOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Share this conversation with others.
              </p>

              <div className="flex items-center justify-between gap-4 py-4">
                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-[#1DA1F2]" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Twitter
                  </span>
                </button>
                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Facebook
                  </span>
                </button>
                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    LinkedIn
                  </span>
                </button>
                <button className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-slate-700 dark:text-white" />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    Email
                  </span>
                </button>
              </div>

              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Link2 className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  readOnly
                  value="https://datawave.ai/share/chat/a1b2c3d4"
                  className="block w-full pl-9 pr-20 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131722] text-slate-600 dark:text-slate-300 text-sm focus:outline-none"
                />
                <button className="absolute inset-y-1 right-1 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors shadow-sm">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
