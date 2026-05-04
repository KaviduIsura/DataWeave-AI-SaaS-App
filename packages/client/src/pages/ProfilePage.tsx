import {
  ArrowLeft,
  User,
  Mail,
  Shield,
  Key,
  CreditCard,
  ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();

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
            Your Profile
          </span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* Profile Card */}
        <section className="bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg text-3xl font-semibold shrink-0 z-10">
            JD
          </div>

          <div className="flex-1 text-center sm:text-left z-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">John Doe</h1>
            <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-4 h-4" /> john.doe@example.com
            </p>
          </div>

          <div className="z-10">
            <button className="px-5 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl font-medium text-sm transition-colors border border-slate-200 dark:border-white/5">
              Edit Profile
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Navigation/Settings */}
          <div className="md:col-span-1 flex flex-col gap-2">
            {[
              { icon: User, label: 'Personal Information', active: true },
              { icon: Shield, label: 'Security & Privacy', active: false },
              { icon: CreditCard, label: 'Billing & Plan', active: false },
              { icon: Key, label: 'API Keys', active: false },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all text-left ${item.active ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium' : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1">{item.label}</span>
                  {item.active && <ChevronRight className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Form Area */}
          <div className="md:col-span-2 bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Bio
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself..."
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="mt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
