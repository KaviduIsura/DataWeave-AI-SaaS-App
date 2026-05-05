import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Network, Table, Link2 } from 'lucide-react';

const tabs = [
  { id: 'assistants', label: 'AI Assistants', icon: Sparkles },
  { id: 'workflows', label: 'Visual Workflows', icon: Network },
  { id: 'data', label: 'Data Tables', icon: Table },
  { id: 'integrations', label: 'Integrations', icon: Link2 },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="platform" className="py-32 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-medium text-slate-900 mb-8 tracking-tighter leading-[1.1]"
          >
            Everything you need to build AI automations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 text-xl leading-relaxed"
          >
            A unified platform with all the tools your team needs to build,
            deploy, and manage intelligent workflows at scale.
          </motion.p>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          {/* Tabs Sidebar */}
          <div className="flex flex-col gap-3 relative">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-colors duration-300 z-10 ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 z-0"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon
                    className={`w-6 h-6 relative z-10 transition-colors duration-300 ${isActive ? 'text-blue-500' : 'text-slate-400 group-hover:text-slate-600'}`}
                  />
                  <span className="font-medium text-lg relative z-10 tracking-tight">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="relative min-h-[550px]">
            <AnimatePresence mode="wait">
              {activeTab === 'assistants' && (
                <motion.div
                  key="assistants"
                  initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="grid md:grid-cols-2 gap-16 items-center h-full"
                >
                  {/* Mockup Left */}
                  <div className="relative h-[500px] bg-gradient-to-br from-blue-50/80 to-indigo-50/50 rounded-[2.5rem] border border-white p-8 overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] group">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute top-12 right-6 w-72 bg-white/90 backdrop-blur-md rounded-[1.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-white p-5 transform translate-x-4"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="font-medium text-slate-800 tracking-tight">
                          DataWave Bot
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm">
                            Qualify this lead.
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-slate-50 border border-slate-100 text-slate-700 text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm">
                            Analyzing data... Score: 92/100. High intent.
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className="absolute bottom-12 left-6 w-72 bg-white/90 backdrop-blur-md rounded-[1.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-white p-5 z-10"
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        </div>
                        <div className="font-medium text-slate-800 tracking-tight">
                          Support Chat
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-start">
                          <div className="bg-slate-50 border border-slate-100 text-slate-700 text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm">
                            I need help with my billing.
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-sm">
                            I've attached your invoice.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Right */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-slate-900 font-semibold tracking-wide uppercase text-sm">
                        AI Assistants
                      </span>
                      <span className="text-slate-400 font-medium tracking-tight">
                        DataWave.AI
                      </span>
                    </div>
                    <h3 className="text-4xl font-medium text-slate-900 mb-6 tracking-tight leading-tight">
                      Intelligent Agent Deployment
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                      Natural chat agents that act on behalf of your team.
                      Automate customer support, internal knowledge retrieval,
                      and personalized lead qualification, ensuring 24/7
                      availability and instant responses.
                    </p>

                    <div className="bg-white border border-slate-200/60 rounded-2xl p-5 flex items-center gap-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
                      <span className="text-green-600 font-semibold text-2xl bg-green-50/80 px-4 py-2 rounded-xl border border-green-100">
                        -75%
                      </span>
                      <span className="text-slate-600 font-medium">
                        Time spent on handling routine inquiries
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'workflows' && (
                <motion.div
                  key="workflows"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col items-center justify-center text-slate-400 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm"
                >
                  <Network className="w-16 h-16 text-slate-200 mb-4" />
                  <span className="text-lg tracking-tight">
                    Visual Workflows Module Coming Soon
                  </span>
                </motion.div>
              )}
              {activeTab === 'data' && (
                <motion.div
                  key="data"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col items-center justify-center text-slate-400 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm"
                >
                  <Table className="w-16 h-16 text-slate-200 mb-4" />
                  <span className="text-lg tracking-tight">
                    Data Tables Module Coming Soon
                  </span>
                </motion.div>
              )}
              {activeTab === 'integrations' && (
                <motion.div
                  key="integrations"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col items-center justify-center text-slate-400 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm"
                >
                  <Link2 className="w-16 h-16 text-slate-200 mb-4" />
                  <span className="text-lg tracking-tight">
                    Integrations Directory Coming Soon
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
