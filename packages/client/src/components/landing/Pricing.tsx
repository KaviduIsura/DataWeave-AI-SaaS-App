import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'Perfect for individuals getting started with AI.',
    features: [
      '100 AI Generation credits/mo',
      'Basic Time Tracking',
      'Standard support',
      '7-day chat history',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    desc: 'Ideal for professionals needing advanced tools.',
    features: [
      'Unlimited AI Generation',
      'Advanced Dashboard Analytics',
      'Priority 24/7 support',
      'Unlimited history',
      'Custom AI personas',
    ],
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/mo',
    desc: 'For teams collaborating on complex projects.',
    features: [
      'Everything in Pro',
      'Up to 10 team members',
      'Shared workspaces',
      'Admin controls',
      'Custom integrations',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your workflow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 backdrop-blur-sm ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-900/40 to-[#0E121A] border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                  : 'bg-[#0E121A] border border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-slate-500">{plan.period}</span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all mb-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.price === '$0' ? 'Get Started' : 'Upgrade Plan'}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-blue-400' : 'text-slate-500'}`}
                    />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
