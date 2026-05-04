import { useState, useEffect } from 'react';
import Sidebar from '../components/chat/Sidebar';
import ChatArea from '../components/chat/ChatArea';
import HistoryPanel from '../components/chat/HistoryPanel';

export default function ChatWorkspace() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans selection:bg-blue-500/30 transition-colors duration-300 bg-slate-50 dark:bg-[#0A0D14]">
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ChatArea />
      <HistoryPanel />
    </div>
  );
}
