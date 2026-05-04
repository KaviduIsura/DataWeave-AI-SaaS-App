import Sidebar from './components/chat/Sidebar';
import ChatArea from './components/chat/ChatArea';
import HistoryPanel from './components/chat/HistoryPanel';

function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0A0D14] font-sans selection:bg-blue-500/30">
      <Sidebar />
      <ChatArea />
      <HistoryPanel />
    </div>
  );
}

export default App;
