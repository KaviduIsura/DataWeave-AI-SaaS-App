import { motion } from 'framer-motion';
import { Play, Activity, Clock, CheckCircle2 } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Insights at a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              glance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            The built-in Time Tracker Dashboard transforms how you view
            productivity. Everything is automatically logged and beautifully
            visualized.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0A0D14]/80 backdrop-blur-2xl p-6 shadow-2xl"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-white font-medium text-lg">
                Weekly Overview
              </h3>
              <p className="text-slate-500 text-sm">Oct 24 - Oct 30</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
              <Play className="w-4 h-4" />
              Start Timer
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Stat Cards */}
            {[
              {
                label: 'Total Tracked Time',
                value: '38h 45m',
                trend: '+12%',
                icon: Clock,
                color: 'text-blue-400',
              },
              {
                label: 'Productivity Score',
                value: '92%',
                trend: '+5%',
                icon: Activity,
                color: 'text-green-400',
              },
              {
                label: 'Tasks Completed',
                value: '45',
                trend: '+2',
                icon: CheckCircle2,
                color: 'text-purple-400',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/5 p-5 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-3 text-slate-400 text-sm">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  {stat.label}
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded mb-1">
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Fake Chart Area */}
          <div className="h-64 bg-gradient-to-t from-white/5 to-transparent border border-white/5 rounded-xl relative flex items-end justify-between p-4 px-8">
            {/* Bars */}
            {[40, 70, 45, 90, 60, 30, 80].map((height, i) => (
              <div key={i} className="w-12 group relative flex justify-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.8,
                    type: 'spring',
                  }}
                  className="w-full bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/30 rounded-t-sm transition-colors cursor-pointer relative"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1C2130] text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {height} hrs
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
