import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  toggleTheme,
  setActiveView,
  toggleLayoutState,
} from '../store/slices/uiSlice';
import Sidebar from '../components/chat/Sidebar';
import ChatArea from '../components/chat/ChatArea';
import NewChatArea from '../components/chat/NewChatArea';
import BrowseArea from '../components/chat/BrowseArea';
import HistoryPanel from '../components/chat/HistoryPanel';
import ImageGenerationArea from '../components/chat/ImageGenerationArea';
import VoiceGenerationArea from '../components/chat/VoiceGenerationArea';
import VideoGenerationArea from '../components/chat/VideoGenerationArea';
import { clearMessages } from '../store/slices/chatSlice';

export type ViewType =
  | 'chat'
  | 'new_chat'
  | 'browse'
  | 'image_generation'
  | 'voice_generation'
  | 'video_generation';

export default function ChatWorkspace() {
  const dispatch = useAppDispatch();
  const { isDarkMode, activeView, layoutState } = useAppSelector(
    (state) => state.ui
  );

  const handleToggleLayout = () => {
    dispatch(toggleLayoutState());
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleNavigate = (view: ViewType) => {
    if (view !== 'chat' && view !== 'new_chat') {
      dispatch(clearMessages());
    }
    dispatch(setActiveView(view));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans selection:bg-blue-500/30 transition-colors duration-300 bg-slate-50 dark:bg-[#0A0D14]">
      {layoutState !== 2 && (
        <Sidebar
          isDarkMode={isDarkMode}
          toggleTheme={handleToggleTheme}
          activeView={activeView}
          onNavigate={handleNavigate}
        />
      )}
      {activeView === 'browse' && <BrowseArea />}
      {activeView === 'new_chat' && (
        <NewChatArea isFullWidth={layoutState === 2} />
      )}
      {activeView === 'chat' && <ChatArea isFullWidth={layoutState === 2} />}
      {activeView === 'image_generation' && <ImageGenerationArea />}
      {activeView === 'voice_generation' && <VoiceGenerationArea />}
      {activeView === 'video_generation' && <VideoGenerationArea />}
      <HistoryPanel
        isCollapsed={layoutState !== 0}
        onToggleLayout={handleToggleLayout}
      />
    </div>
  );
}
