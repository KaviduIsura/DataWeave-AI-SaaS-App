import {
  ArrowLeft,
  Bell,
  Monitor,
  Lock,
  Globe,
  HardDrive,
  Cpu,
  Paintbrush,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SettingsPage() {
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
          <span className="font-semibold text-lg tracking-tight">Settings</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Preferences & Settings
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage your app appearance, notifications, and advanced
            configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Navigation */}
          <div className="md:col-span-1 flex flex-col gap-2 sticky top-24 h-fit">
            {[
              { icon: Paintbrush, label: 'Appearance', active: true },
              { icon: Bell, label: 'Notifications', active: false },
              { icon: Monitor, label: 'Display & Interface', active: false },
              { icon: Cpu, label: 'AI Models & Default', active: false },
              { icon: Globe, label: 'Language & Region', active: false },
              { icon: HardDrive, label: 'Data & Storage', active: false },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all text-left ${item.active ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium' : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Settings Area */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Theme Settings */}
            <section className="bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Paintbrush className="w-5 h-5 text-blue-500" />
                Appearance
              </h2>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Theme Preference
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-blue-500 bg-slate-50 dark:bg-black/20 text-blue-600 dark:text-blue-400">
                      <div className="w-full h-12 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800"></div>
                      <span className="text-sm font-medium">Dark Mode</span>
                    </button>
                    <button className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent hover:border-slate-300 dark:hover:border-white/20 bg-slate-50 dark:bg-black/20 text-slate-600 dark:text-slate-400">
                      <div className="w-full h-12 rounded-lg bg-gradient-to-r from-white to-slate-100 border border-slate-200"></div>
                      <span className="text-sm font-medium">Light Mode</span>
                    </button>
                    <button className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent hover:border-slate-300 dark:hover:border-white/20 bg-slate-50 dark:bg-black/20 text-slate-600 dark:text-slate-400">
                      <div className="w-full h-12 rounded-lg bg-gradient-to-r from-slate-400 to-slate-500"></div>
                      <span className="text-sm font-medium">System Auto</span>
                    </button>
                  </div>
                </div>

                <hr className="border-slate-200 dark:border-white/10" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                      Reduce Animations
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Minimize UI motions for better performance
                    </p>
                  </div>
                  <button className="w-11 h-6 bg-slate-200 dark:bg-white/10 rounded-full relative transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 shadow-sm"></div>
                  </button>
                </div>
              </div>
            </section>

            {/* Notification Settings */}
            <section className="bg-white dark:bg-[#131722] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-blue-500" />
                Notifications
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                      Email Updates
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Receive product news and updates via email
                    </p>
                  </div>
                  <button className="w-11 h-6 bg-blue-500 rounded-full relative transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                  </button>
                </div>

                <hr className="border-slate-200 dark:border-white/10" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                      Push Notifications
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Get alerts for generation completion
                    </p>
                  </div>
                  <button className="w-11 h-6 bg-blue-500 rounded-full relative transition-colors">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
