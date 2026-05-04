import {
  SquarePlay,
  Paperclip,
  Mic,
  Link2,
  MoreHorizontal,
} from 'lucide-react';

const sampleTexts = [
  'A cinematic drone shot of a mountain',
  'A 3D animation of a walking robot',
  'A time-lapse of a blooming flower',
  'A retro VHS style video of a car driving',
];

export default function VideoGenerationArea() {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#0B0D14] h-full min-h-0 relative transition-colors duration-300">
      {/* Top Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Centered Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 w-full max-w-4xl mx-auto">
        {/* Welcome Greeting */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-6">
            <SquarePlay className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            What video would you like to create?
          </h1>
        </div>

        {/* Input Area (Centered) */}
        <div className="w-full mb-6">
          <div className="bg-slate-50 dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-2xl p-2 relative shadow-2xl shadow-blue-500/5 transition-colors">
            <textarea
              placeholder="Describe the video you want to generate..."
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none outline-none px-4 pt-4 pb-12 min-h-[140px] text-base"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              {/* MoreHorizontal Button with gradient border */}
              <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                  <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-[#1C2130]/80 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Paperclip Button with gradient border */}
                <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                  <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                      <Paperclip className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Mic Button with gradient border */}
                <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                  <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Link2 Button with gradient border */}
                <div className="relative p-[1px] rounded-lg bg-gradient-to-t from-slate-200 via-slate-100 to-white dark:from-white/5 dark:via-white/30 dark:to-white/50 shadow-md">
                  <div className="bg-slate-50 dark:bg-[#131722] rounded-lg">
                    <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors">
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Texts */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {sampleTexts.map((text, idx) => (
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
