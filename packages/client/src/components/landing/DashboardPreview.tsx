import { motion } from 'framer-motion';
import {
  Sparkles,
  Home,
  GitMerge,
  Link2,
  Users,
  BarChart3,
  Mic,
  FileText,
  Settings,
  ArrowUp,
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="relative pb-24 px-6 z-20 flex justify-center mt-[-40px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl rounded-[2rem] p-2 bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white"
      >
        <div className="rounded-[1.5rem] overflow-hidden bg-white/90 border border-slate-100 shadow-inner flex items-center justify-center relative min-h-[600px] w-full">
          {/* Subtle Top Mesh */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-100/50 via-white to-white pointer-events-none" />

          <img
            src="/dashboard-preview.png"
            alt="DataWave Dashboard"
            className="w-full h-auto object-cover relative z-10 rounded-[1.5rem]"
          />
        </div>
      </motion.div>
    </section>
  );
}
