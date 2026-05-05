import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Users,
  PlayCircle,
  ArrowUpRight,
} from 'lucide-react';

const resources = [
  {
    title: 'Documentation',
    description: 'Everything you need to build and integrate with our API.',
    icon: FileText,
    link: '#',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50/50',
  },
  {
    title: 'Tutorials',
    description: 'Step-by-step guides to master advanced automation workflows.',
    icon: PlayCircle,
    link: '#',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50/50',
  },
  {
    title: 'Community',
    description: 'Join thousands of builders sharing flows and templates.',
    icon: Users,
    link: '#',
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50/50',
  },
  {
    title: 'Blog',
    description: 'The latest updates, release notes, and AI industry news.',
    icon: BookOpen,
    link: '#',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-50/50',
  },
];

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="py-32 bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tighter leading-[1.1] mb-6"
            >
              Resources to help you build
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              Explore our comprehensive guides, join the community, and learn
              how to maximize your AI automations.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2 group">
              View all resources
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.a
                href={resource.link}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-[2rem] p-8 border border-white/60 bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col ${resource.bg}`}
              >
                {/* Background Glow on Hover */}
                <div
                  className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${resource.color} blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full`}
                ></div>

                <div
                  className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 relative z-10 border border-slate-100`}
                >
                  <Icon className={`w-6 h-6 text-slate-700`} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight relative z-10">
                  {resource.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                  {resource.description}
                </p>

                <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors relative z-10">
                  Read more{' '}
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
