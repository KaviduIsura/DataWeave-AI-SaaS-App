import { useState, useEffect } from 'react';
import Sidebar from '../components/chat/Sidebar';
import ChatArea from '../components/chat/ChatArea';
import NewChatArea from '../components/chat/NewChatArea';
import BrowseArea from '../components/chat/BrowseArea';
import HistoryPanel from '../components/chat/HistoryPanel';

export type ViewType = 'chat' | 'new_chat' | 'browse';

export default function ChatWorkspace() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const [activeView, setActiveView] = useState<ViewType>('chat');

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
      <Sidebar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeView={activeView}
        onNavigate={setActiveView}
      />
      {activeView === 'browse' && <BrowseArea />}
      {activeView === 'new_chat' && <NewChatArea />}
      {activeView === 'chat' && <ChatArea />}
      <HistoryPanel />
    </div>
  );
}
