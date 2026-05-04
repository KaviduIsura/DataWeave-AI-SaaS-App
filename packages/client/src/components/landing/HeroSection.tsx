import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, Code, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>DataWeave AI v2.0 is here</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Your AI Workspace for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Productivity
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Chat, create, and manage everything in one intelligent interface.
            Experience the future of work with a unified platform designed for
            speed and clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/chat"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all backdrop-blur-md">
              <Play className="w-4 h-4 fill-current" />
              View Demo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
              14-day free trial
            </div>
          </div>
        </motion.div>

        {/* Right Side: Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main App Window Mockup */}
          <div className="relative w-full max-w-[500px] rounded-2xl border border-white/10 bg-[#0E121A]/80 backdrop-blur-xl shadow-2xl overflow-hidden z-10 flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs font-medium text-slate-500 flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                DataWeave AI Assistant
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* User Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex justify-end"
              >
                <div className="bg-blue-600/20 border border-blue-500/30 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm">
                  Generate a summary of our Q3 growth metrics.
                </div>
              </motion.div>

              {/* AI Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/5 border border-white/10 text-slate-300 rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-3">
                  <p>Here's a quick summary of Q3 growth:</p>
                  <ul className="space-y-1 list-disc pl-4 text-slate-400">
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                    >
                      Revenue increased by 24% YoY
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.0 }}
                    >
                      Active users grew to 1.2M
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 }}
                    >
                      Churn rate decreased by 2.1%
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Input Mockup */}
            <div className="p-4 border-t border-white/5 bg-[#0A0D14]">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-500">
                  Ask a follow-up question...
                </span>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="hidden md:flex absolute -top-10 -right-4 bg-white/10 border border-white/20 backdrop-blur-xl p-4 rounded-xl shadow-2xl items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Code Gen</p>
              <p className="text-xs text-slate-400">Ready</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="hidden md:flex absolute -bottom-8 -left-8 bg-white/10 border border-white/20 backdrop-blur-xl p-4 rounded-xl shadow-2xl items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Analysis</p>
              <p className="text-xs text-slate-400">Completed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
