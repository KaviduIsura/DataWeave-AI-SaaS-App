import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center pt-8 pb-16 overflow-hidden z-10">
      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between z-20 mb-24">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-slate-900 text-xl tracking-tight">
            DataWave
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/50 shadow-sm">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Platform
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/chat"
            className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Content (Centered) */}
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center z-20">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-slate-600 text-sm font-medium mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-slate-500" />
          <span>From simple automations to enterprise orchestration</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6"
        >
          Turn workflows into smart AI <br className="hidden md:block" />{' '}
          automations
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10"
        >
          Boost productivity with fast, accurate AI automation that simplifies
          operations, scales effortlessly, empowers teams, and handles heavy
          work for you.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <Link
            to="/chat"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition-all shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 text-lg"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Decorative Grid Pattern behind Hero text */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none opacity-40 z-0 flex flex-wrap justify-center content-center gap-1">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`w-24 h-24 border border-white/40 bg-white/10 backdrop-blur-sm rounded-xl ${i % 7 === 0 ? 'opacity-100' : 'opacity-0'}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
