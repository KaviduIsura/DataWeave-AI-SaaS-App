import {
  ArrowLeft,
  Search,
  Book,
  MessageCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HelpCenter() {
  const navigate = useNavigate();

  const categories = [
    {
      icon: Book,
      title: 'Getting Started',
      desc: 'Learn the basics of DataWave AI',
    },
    {
      icon: MessageCircle,
      title: 'Chat & Generation',
      desc: 'How to use Image and Voice Gen',
    },
    {
      icon: FileText,
      title: 'Account & Billing',
      desc: 'Manage your subscription and settings',
    },
  ];

  const faqs = [
    {
      q: 'How do I generate an image?',
      a: 'Click on the image icon in the left sidebar to open the Image Generation area, then simply describe what you want to create.',
    },
    {
      q: 'What AI models does DataWave use?',
      a: 'DataWave uses a combination of industry-leading models optimized for different tasks, including chat, image, voice, and video generation.',
    },
    {
      q: 'How can I upgrade my plan?',
      a: 'You can upgrade your plan by clicking the "Upgrade Premium" button at the bottom of the sidebar or by visiting your Account settings.',
    },
    {
      q: 'Is there an API available?',
      a: 'Yes! API access is available for our Enterprise customers. Please contact support for more details and documentation.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0D14] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 transition-colors duration-300 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-[#0E121A]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold text-lg tracking-tight">
            Help Center
          </span>
        </div>
        <div className="text-sm font-medium text-slate-500">
          DataWave Support
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-6">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            How can we help you?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-8">
            Search our knowledge base or browse categories below to find the
            answers you need.
          </p>

          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131722] text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm transition-shadow"
              placeholder="Search for articles, tutorials, or FAQs..."
            />
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <button
                  key={idx}
                  className="flex flex-col items-start p-6 rounded-2xl bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg transition-all text-left group"
                >
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {cat.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* FAQs */}
        <section className="pb-12">
          <h2 className="text-xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.q}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed hidden group-hover:block">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
