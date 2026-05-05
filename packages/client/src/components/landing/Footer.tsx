import { Sparkles } from 'lucide-react';
import { TwitterLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900 text-lg tracking-tight">
                DataWeave
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              Your AI Workspace for Productivity. Chat, create, and manage
              everything in one intelligent interface.
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-white transition-colors">
                <TwitterLogo className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <GithubLogo className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <LinkedinLogo className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DataWeave AI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
