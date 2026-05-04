import { useEffect, useState } from 'react';
import './App.css';
// import { Button } from './components/ui/button';
import Sidebar from './components/client/Sidebar';

function App() {
  const [message, setMessage] = useState('Hello, World!');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
    // .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default App;
