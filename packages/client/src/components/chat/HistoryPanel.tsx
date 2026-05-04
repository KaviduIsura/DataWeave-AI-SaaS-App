import { X, Sparkles } from 'lucide-react';

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
    <div className="w-[320px] bg-[#0E121A] border-l border-white/5 h-screen flex flex-col shrink-0">
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        <h2 className="text-white font-medium">History</h2>
        <button className="text-slate-400 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="relative border-l border-white/10 ml-4 space-y-8 pb-8">
          {historyTimeline.map((item, index) => (
            <div key={item.id} className="relative pl-6">
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0E121A] flex items-center justify-center">
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
                    {item.type === 'ai' ? 'Nokat AI' : 'You'}
                  </span>
                  <span className="text-xs text-slate-500">• {item.time}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-1">
                  {item.title}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {item.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
