import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Fingerprint,
  Lock,
  CheckCircle2,
  ChevronRight,
  LayoutGrid,
  Users,
  Sparkles,
} from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden">
      {/* Trusted By Section */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
        <p className="text-center text-slate-400 text-sm font-medium mb-10 tracking-wide uppercase">
          Trusted by teams at fast-growing companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xl">
            <Zap className="w-6 h-6 fill-current" /> Zapfast
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xl">
            <LayoutGrid className="w-6 h-6 fill-current" /> Vectra
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xl">
            <Shield className="w-6 h-6 fill-current" /> Signum.
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xl">
            <Fingerprint className="w-6 h-6 fill-current" /> Grapho
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xl">
            <CheckCircle2 className="w-6 h-6 fill-current" /> Optimal
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tighter mb-8 leading-[1.1]"
          >
            Enterprise-ready automation, built for scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 text-xl leading-relaxed"
          >
            Secure, auditable systems and SSO-friendly controls so your teams
            can automate confidently.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Fast and Intuitive */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] p-10 bg-gradient-to-br from-indigo-50/80 to-purple-50/50 border-t border-l border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group min-h-[450px]"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                Fast and intuitive
              </h3>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                Build easily with drag and drop, low/no-code and collaboration
                tools.
              </p>
            </div>

            {/* Mockup inside card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -right-10 w-[110%] h-auto rotate-[-8deg] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] bg-white/90 backdrop-blur-xl border-t border-l border-white/80 p-8 group-hover:rotate-[-6deg] transition-transform duration-700 ease-out"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-yellow-400 shadow-md"></div>
                <div className="text-3xl font-medium text-slate-300 tracking-tight">
                  How can I help you?
                </div>
              </div>
              <div className="w-full bg-slate-50 rounded-2xl px-6 py-5 flex items-center justify-between border border-slate-100/50">
                <span className="text-slate-400 text-lg">Write Message...</span>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Security & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] p-10 bg-gradient-to-br from-yellow-50/80 to-green-50/50 border-t border-l border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group min-h-[450px]"
          >
            <div className="relative z-10 mb-12">
              <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                Security & Compliance
              </h3>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                Role-based access, audit logs, and enterprise encryption.
              </p>
            </div>

            {/* Graphic inside card */}
            <div className="relative w-full flex justify-center items-center mt-8">
              <motion.img
                src="/security_glass.png"
                alt="Security and Compliance"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out relative z-10 rounded-[2rem]"
              />
            </div>
          </motion.div>

          {/* Card 3: Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] p-10 bg-gradient-to-br from-cyan-50/80 to-blue-50/50 border-t border-l border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group min-h-[400px]"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                Integrations at Scale
              </h3>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                Native connectors and flexible API endpoints.
              </p>
            </div>

            {/* Connections Graphic */}
            <div className="relative w-full flex justify-center items-center mt-4 h-[220px]">
              <motion.img
                src="/integration_nodes.png"
                alt="Integration Nodes"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full max-w-[340px] h-auto object-contain absolute bottom-[-40px] group-hover:translate-y-2 transition-transform duration-700 ease-out drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-[2rem]"
              />
            </div>
          </motion.div>

          {/* Card 4: Team Controls */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] p-10 bg-gradient-to-br from-purple-50/80 to-pink-50/50 border-t border-l border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group min-h-[400px]"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">
                Team Controls
              </h3>
              <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                Policies, permissions, and approval workflows to govern
                automations.
              </p>
            </div>

            {/* Abstract Graphic */}
            <div className="relative w-full flex justify-center items-center mt-8">
              <motion.img
                src="/team_controls.png"
                alt="Team Controls"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out rounded-[2rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
