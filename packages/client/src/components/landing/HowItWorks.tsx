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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Everything you need to build AI automations
          </h2>
          <p className="text-slate-500 text-lg">
            A unified platform with all the tools your team needs to build,
            deploy, and manage intelligent workflows at scale.
          </p>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Tabs Sidebar */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-300 ${isActive ? 'bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                >
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'text-slate-400'}`}
                  />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === 'assistants' && (
                <motion.div
                  key="assistants"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  {/* Mockup Left */}
                  <div className="relative h-[450px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] border border-slate-100 p-8 overflow-hidden">
                    <div className="absolute top-10 right-10 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 transform translate-x-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="font-medium text-sm text-slate-800">
                          DataWave Bot
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white text-xs px-3 py-2 rounded-xl rounded-tr-sm">
                            Qualify this lead.
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-slate-100 text-slate-700 text-xs px-3 py-2 rounded-xl rounded-tl-sm">
                            Analyzing data... Score: 92/100. High intent.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-10 left-10 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-medium text-sm text-slate-800">
                          Support Chat
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div className="bg-slate-100 text-slate-700 text-xs px-3 py-2 rounded-xl rounded-tl-sm">
                            I need help with my billing.
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white text-xs px-3 py-2 rounded-xl rounded-tr-sm">
                            I've attached your invoice.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Right */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-slate-900 font-semibold">
                        AI Assistants
                      </span>
                      <span className="text-slate-400 font-medium">
                        DataWave.AI
                      </span>
                    </div>
                    <h3 className="text-3xl font-medium text-slate-900 mb-4">
                      Intelligent Agent Deployment
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-8">
                      Natural chat agents that act on behalf of your team.
                      Automate customer support, internal knowledge retrieval,
                      and personalized lead qualification, ensuring 24/7
                      availability and instant responses.
                    </p>

                    <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                      <span className="text-green-500 font-medium text-xl bg-green-50 px-3 py-1 rounded-lg">
                        -75%
                      </span>
                      <span className="text-slate-600 text-sm">
                        Time spent on handling routine inquiries
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'workflows' && (
                <motion.div
                  key="workflows"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center text-slate-400"
                >
                  Visual Workflows Content
                </motion.div>
              )}
              {activeTab === 'data' && (
                <motion.div
                  key="data"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center text-slate-400"
                >
                  Data Tables Content
                </motion.div>
              )}
              {activeTab === 'integrations' && (
                <motion.div
                  key="integrations"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center text-slate-400"
                >
                  Integrations Content
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
