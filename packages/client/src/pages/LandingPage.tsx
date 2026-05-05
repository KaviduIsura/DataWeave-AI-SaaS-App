import HeroSection from '../components/landing/HeroSection';

import FeaturesSection from '../components/landing/FeaturesSection';
import DashboardPreview from '../components/landing/DashboardPreview';
import HowItWorks from '../components/landing/HowItWorks';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Global Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[60%] bg-purple-400/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-yellow-300/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Global Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <HeroSection />
      <DashboardPreview />
      <FeaturesSection />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}
