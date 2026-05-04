import { motion } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function DemoSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Experience the flow
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how DataWeave AI handles complex requests in real-time.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[#0E121A]/80 backdrop-blur-xl shadow-2xl flex h-[500px]"
        >
          {/* Sidebar Preview */}
          <div className="hidden md:flex w-64 border-r border-white/5 bg-[#0A0D14]/50 flex-col p-4">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Recent Chats
            </div>
            <div className="space-y-2">
              {[
                'Analyze Q3 Metrics',
                'Generate React Component',
                'Refactor Database Schema',
                'Draft Marketing Copy',
              ].map((chat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 text-sm text-slate-400 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span className="truncate">{chat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex justify-end w-full"
              >
                <div className="bg-blue-600/20 border border-blue-500/30 text-blue-100 rounded-2xl rounded-tr-sm px-4 py-2 sm:px-5 sm:py-3 max-w-[90%] sm:max-w-[80%] text-xs sm:text-sm shadow-lg">
                  Can you generate a React component for a Pricing card? It
                  should have a dark theme.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/5 border border-white/10 text-slate-300 rounded-2xl rounded-tl-sm px-5 py-4 text-sm w-full shadow-lg">
                  <p className="mb-4 text-xs sm:text-sm">
                    Certainly! Here's a sleek, dark-themed pricing card
                    component using Tailwind CSS:
                  </p>

                  {/* Fake Code Block */}
                  <div className="rounded-lg bg-[#0A0D14] border border-white/10 overflow-hidden w-full max-w-full">
                    <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5 text-[10px] sm:text-xs text-slate-400 font-mono">
                      PricingCard.tsx
                    </div>
                    <div className="p-4 font-mono text-[10px] sm:text-xs text-slate-400 space-y-2 overflow-x-auto relative w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 2, duration: 2, ease: 'linear' }}
                        className="overflow-hidden whitespace-nowrap text-blue-400"
                      >
                        export default function PricingCard() {'{'}
                      </motion.div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.2, duration: 2, ease: 'linear' }}
                        className="overflow-hidden whitespace-nowrap pl-4"
                      >
                        return (
                      </motion.div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.4, duration: 2, ease: 'linear' }}
                        className="overflow-hidden whitespace-nowrap pl-8 text-purple-400"
                      >
                        &lt;div className="bg-slate-900 border-white/10
                        rounded-xl p-6"&gt;
                      </motion.div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.6, duration: 2, ease: 'linear' }}
                        className="overflow-hidden whitespace-nowrap pl-12"
                      >
                        &lt;h3 className="text-white text-xl font-bold"&gt;Pro
                        Plan&lt;/h3&gt;
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 3 }}
                      >
                        <span className="animate-pulse inline-block w-2 h-4 bg-blue-500" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-white/5">
              <div className="bg-[#161B26] border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Generating response...
                </span>
                <div className="flex gap-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
