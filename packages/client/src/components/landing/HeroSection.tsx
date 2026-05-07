import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const textContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full flex flex-col items-center pt-8 pb-32 overflow-hidden z-10">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between z-30 mb-32 relative"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-900 text-xl tracking-tight">
            DataWave
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <a
            href="#"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#platform"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Platform
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#resources"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Resources
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors hidden md:block"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-[0_5px_20px_rgba(0,0,0,0.05)]"
          >
            Sign up
          </Link>
        </div>
      </motion.nav>

      {/* Hero Content (Centered) */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center z-20 relative"
      >
        {/* Antigravity Floating Elements Behind Content */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-10"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-20 -right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl -z-10"
        ></motion.div>

        {/* Pill Badge */}
        <motion.div
          variants={item}
          className="group cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/60 bg-white/40 backdrop-blur-md text-slate-600 text-sm font-medium mb-8 shadow-sm hover:bg-white/60 transition-all hover:shadow-md"
        >
          <Sparkles className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>From simple automations to enterprise orchestration</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-6xl md:text-[5.5rem] font-medium tracking-tighter text-slate-900 leading-[1.05] mb-8 relative">
          <motion.span className="block" variants={item}>
            Turn workflows into
          </motion.span>
          <motion.span className="relative inline-block" variants={item}>
            smart AI automations
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: 'circOut' }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-30 origin-left"
            ></motion.span>
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-12"
        >
          Boost productivity with fast, accurate AI automation that simplifies
          operations, scales effortlessly, empowers teams, and handles heavy
          work for you.
        </motion.p>

        {/* Primary CTA */}
        <motion.div variants={item} className="relative group">
          {/* Diffuse Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <Link
            to="/chat"
            className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg"
          >
            Get Started Free
          </Link>
        </motion.div>
      </motion.div>

      {/* Professional Perspective Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[150vh] pointer-events-none z-0 overflow-hidden perspective-[1000px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(60deg)_translateZ(-200px)_scale(2)] [transform-origin:center_center]"
        ></motion.div>
        {/* Radial fade to hide edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,theme(colors.slate.50)_70%)] opacity-80"></div>
      </div>
    </section>
  );
}
