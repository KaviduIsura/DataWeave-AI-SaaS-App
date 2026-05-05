import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-32 border-b border-slate-100 pb-16">
          <div className="text-center">
            <div className="text-3xl font-medium text-slate-900 mb-1">2M+</div>
            <div className="text-sm text-slate-500">workflows executed</div>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-medium text-slate-900 mb-1">
              SOC 3
            </div>
            <div className="text-sm text-slate-500">Security Standards</div>
          </div>
          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-medium text-slate-900 mb-1">98%</div>
            <div className="text-sm text-slate-500">uptime SLA</div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight">
            Start free. Scale when you're ready.
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Monthly and annual billing available. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-full shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'text-slate-900 bg-slate-50 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isAnnual ? 'text-slate-900 bg-slate-50 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Yearly{' '}
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                30% Off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mt-16">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col"
          >
            <div className="mb-8">
              <span className="text-slate-900 font-medium text-lg">Free</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-medium text-slate-900">$0</span>
                <span className="text-slate-500">/ month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                '10 automations',
                'Community support',
                'Basic integrations',
                'Standard dashboard',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-300" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all">
              Choose plan
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-white rounded-3xl p-1 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] h-full flex flex-col transform md:-translate-y-4"
          >
            {/* Glowing Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-300 to-yellow-200 rounded-3xl -z-10"></div>

            <div className="bg-white/95 backdrop-blur-xl rounded-[1.4rem] p-8 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-yellow-400"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-yellow-400 text-white text-xs font-semibold px-4 py-1 rounded-b-xl">
                Popular
              </div>

              <div className="mb-8 mt-4">
                <span className="text-slate-900 font-medium text-lg">Pro</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-medium text-slate-900">
                    {isAnnual ? '$69' : '$99'}
                  </span>
                  <span className="text-slate-500">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {[
                  'Unlimited automations',
                  'Email support',
                  'Advanced integrations',
                  'Team collaboration',
                  'Priority support',
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-slate-800" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all shadow-[0_5px_15px_rgba(99,102,241,0.3)]">
                Choose plan
              </button>
            </div>
          </motion.div>

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col"
          >
            <div className="mb-8">
              <span className="text-slate-900 font-medium text-lg">Free</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-medium text-slate-900">
                  Custom
                </span>
                <span className="text-slate-500 text-sm">/ contact sales</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Custom workflows',
                'Dedicated success manager',
                'SSO & advanced security',
                'Compliance add-ons',
                '24/7 support',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-slate-300" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all">
              Choose plan
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
