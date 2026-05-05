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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Trusted By Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <p className="text-center text-slate-500 text-sm font-medium mb-8">
          Trusted by teams at fast-growing companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Fake Logos */}
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6"
          >
            Enterprise-ready automation, built for scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            Secure, auditable systems and SSO-friendly controls so your teams
            can automate confidently.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Fast and Intuitive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border border-slate-100 relative overflow-hidden group min-h-[400px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-slate-900 mb-3">
                Fast and intuitive
              </h3>
              <p className="text-slate-500 max-w-sm">
                Build easily with drag and drop, low/no-code and collaboration
                tools.
              </p>
            </div>

            {/* Mockup inside card */}
            <div className="absolute -bottom-10 -right-10 w-[110%] h-auto rotate-[-8deg] transform group-hover:-translate-y-2 group-hover:rotate-[-6deg] transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] rounded-2xl bg-white/80 backdrop-blur-md border border-white p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-yellow-400 shadow-md"></div>
                <div className="text-2xl font-medium text-slate-300">
                  How can I help you?
                </div>
              </div>
              <div className="w-full bg-slate-50 rounded-xl px-4 py-4 flex items-center justify-between border border-slate-100">
                <span className="text-slate-300">Write Message...</span>
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-yellow-50/50 to-green-50/50 border border-slate-100 relative overflow-hidden group min-h-[400px]"
          >
            <div className="relative z-10 mb-12">
              <h3 className="text-2xl font-medium text-slate-900 mb-3">
                Security & Compliance
              </h3>
              <p className="text-slate-500 max-w-sm">
                Role-based access, audit logs, and enterprise encryption.
              </p>
            </div>

            {/* Graphic inside card */}
            <div className="relative w-full flex justify-center items-center mt-10">
              <div className="w-48 h-48 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                <Fingerprint className="w-16 h-16 text-indigo-500 mb-4" />
                <span className="text-slate-600 font-medium">Scanning...</span>
              </div>
              {/* Floating elements */}
              <div className="absolute top-0 right-10 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 z-20 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                <div className="text-sm font-semibold text-slate-800">
                  Protecting the future
                </div>
                <div className="text-[10px] text-slate-400">
                  Reliability and innovation
                </div>
              </div>
              <div className="absolute bottom-10 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 z-20 group-hover:-translate-y-2 transition-transform duration-500 delay-150">
                <div className="text-sm font-semibold text-slate-800">
                  New data protection
                </div>
                <div className="text-[10px] text-slate-400">
                  Innovation for your safety
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 border border-slate-100 relative overflow-hidden group min-h-[350px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-slate-900 mb-3">
                Integrations at Scale
              </h3>
              <p className="text-slate-500 max-w-sm">
                Native connectors and flexible API endpoints.
              </p>
            </div>

            {/* Connections Graphic */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-white/80 backdrop-blur-md rounded-t-2xl shadow-xl border-t border-x border-white p-6 group-hover:translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-6 relative">
                {/* Connection nodes */}
                <div className="w-8 h-8 rounded-full bg-[#E5F4ED] flex items-center justify-center relative z-10">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
                    alt="Slack"
                    className="w-4 h-4"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ECECF1] flex items-center justify-center relative z-10">
                  <Sparkles className="w-4 h-4 text-slate-700" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E1F0FF] flex items-center justify-center relative z-10">
                  <div className="font-bold text-blue-600 text-xs">W</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FCE5E5] flex items-center justify-center relative z-10">
                  <div className="font-bold text-red-500 text-xs">F</div>
                </div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0"></div>
              </div>
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">
                  Connect with:
                </div>
                <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                  <li>Webflow</li>
                  <li>Framer</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Team Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-purple-50/50 to-pink-50/50 border border-slate-100 relative overflow-hidden group min-h-[350px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-slate-900 mb-3">
                Team Controls
              </h3>
              <p className="text-slate-500 max-w-sm">
                Policies, permissions, and approval workflows to govern
                automations.
              </p>
            </div>

            {/* Abstract Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full flex items-center justify-center gap-4 mt-8">
              <div className="w-24 h-32 bg-white/40 border border-white rounded-xl shadow-lg transform -skew-y-6 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center backdrop-blur-sm">
                <Users className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)] flex items-center justify-center z-10">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
              <div className="w-24 h-32 bg-white border border-white rounded-xl shadow-xl transform skew-y-6 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center">
                <Lock className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
