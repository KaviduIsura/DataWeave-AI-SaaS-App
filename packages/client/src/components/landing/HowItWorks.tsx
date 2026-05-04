import { motion } from 'framer-motion';
import { MessageSquare, Cpu, FolderKanban, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Start Chat',
    desc: 'Ask a question or request a task using natural language.',
    color: 'text-blue-400',
  },
  {
    icon: Cpu,
    title: 'Generate',
    desc: 'AI processes context and instantly generates the best output.',
    color: 'text-purple-400',
  },
  {
    icon: FolderKanban,
    title: 'Manage',
    desc: 'Organize chats, code snippets, and assets seamlessly.',
    color: 'text-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'Optimize',
    desc: 'Analyze data and improve workflows with dashboard insights.',
    color: 'text-green-400',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A frictionless workflow designed to save you hours every week.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0E121A] border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.03)] group hover:border-white/20 transition-colors">
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
