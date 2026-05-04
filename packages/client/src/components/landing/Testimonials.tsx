import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Designer',
    avatar: 'https://i.pravatar.cc/100?img=1',
    content:
      'DataWeave AI completely transformed how our team collaborates. The generated UI components save me countless hours.',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    avatar: 'https://i.pravatar.cc/100?img=11',
    content:
      "The smartest AI assistant I've used. It doesn't just write code; it understands our entire project context seamlessly.",
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    avatar: 'https://i.pravatar.cc/100?img=5',
    content:
      "From drafting campaigns to analyzing user metrics on the dashboard, it's like having a brilliant team member working 24/7.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Loved by visionaries
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative"
            >
              <div className="text-4xl text-blue-500/20 absolute top-4 right-6 font-serif">
                "
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border border-white/20"
                />
                <div>
                  <h4 className="text-white font-medium text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
