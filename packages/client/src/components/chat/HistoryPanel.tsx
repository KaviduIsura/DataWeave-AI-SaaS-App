import { div } from 'framer-motion/client';
import {
  X,
  Sparkles,
  ChevronDown,
  Layout,
  Share,
  Settings,
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

export default function HistoryPanel() {
  return (
    <div className="w-[340px] shrink-0 p-3 flex flex-col h-screen gap-3">
      {/* Top Right Actions */}
      <div className="flex items-center justify-end gap-2">
        {/* WaveGPT+ Button with gradient border */}
        <div className="relative p-[1px] rounded-xl bg-gradient-to-t from-white/5 via-white/30 to-white/50 shadow-md">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-tr from-[#0f141c] to-slate-800 hover:bg-[#1C2130] transition-colors text-white text-sm font-medium">
            WaveGPT+
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Share Button with gradient border */}
        <div className="relative p-[1px] rounded-md bg-gradient-to-t from-white/5 via-white/30 to-white/50 shadow-md">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#0f141c] to-slate-800 flex items-center justify-center rounded-md">
            <button className="p-2 text-white hover:text-slate-300 rounded-lg hover:bg-white/5 transition-colors">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Layout Button with gradient border */}
        <div className="relative p-[1px] rounded-md bg-gradient-to-t from-white/5 via-white/30 to-white/50 shadow-md">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#0f141c] to-slate-800 flex items-center justify-center rounded-md">
            <button className="p-2 text-white hover:text-slate-300 rounded-lg hover:bg-white/5 transition-colors">
              <Layout className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* History Panel */}
      <div className="p-1 rounded-lg border border-white/10 flex-1 flex flex-col min-h-0">
        <div className="flex-1 w-full bg-[#0E121A] flex flex-col rounded-md border border-white/10 overflow-hidden min-h-0">
          <div className="p-4 flex items-center justify-between border-b border-white/5 ">
            <h2 className="text-white font-medium">History</h2>
            <button className="text-white hover:text-slate-400 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
            <div className="relative border-l border-white/10 ml-4 space-y-8 pb-8  ">
              {historyTimeline.map((item, index) => (
                <div key={item.id} className="relative pl-6">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0E121A] flex items-center justify-center ">
                    {item.type === 'ai' ? (
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-slate-800 overflow-hidden">
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
                      <span className="text-sm font-medium text-slate-300">
                        {item.type === 'ai' ? 'DataWave' : 'You'}
                      </span>
                      <span className="text-xs text-slate-500">
                        • {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-white leading-relaxed mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs font-medium text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
