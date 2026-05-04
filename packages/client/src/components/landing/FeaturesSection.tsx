import { motion } from 'framer-motion';
import { Bot, Zap, Clock, Users, Shield, LineChart } from 'lucide-react';

const features = [
  {
    title: 'Smart AI Chat',
    description:
      'Interact with an intelligent assistant that understands context, code, and complex queries instantly.',
    icon: Bot,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Time Tracking Dashboard',
    description:
      'Monitor productivity with beautiful, real-time analytics and automated time-logging features.',
    icon: Clock,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Task Automation',
    description:
      'Set up autonomous workflows that trigger actions across your favorite connected apps.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Team Collaboration',
    description:
      'Share insights, chats, and generated assets directly with your team in a unified workspace.',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption ensures your data and conversations remain completely private and secure.',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
  },
  {
    title: 'Advanced Analytics',
    description:
      'Turn your chat data into actionable insights with automatically generated visual reports.',
    icon: LineChart,
    color: 'from-indigo-500 to-cyan-600',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide uppercase mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              work faster
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Powerful tools wrapped in an intuitive interface. Designed for
            individuals and teams who want to maximize their output.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-[#131722]/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-[0_0_20px_currentColor] transition-all`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
