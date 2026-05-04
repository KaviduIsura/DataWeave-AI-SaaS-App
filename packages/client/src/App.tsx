import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatWorkspace from './pages/ChatWorkspace';
import HelpCenter from './pages/HelpCenter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatWorkspace />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
