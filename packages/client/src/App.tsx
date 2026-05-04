import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

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
      <p className="font-bold p-4 text-3xl">{message}</p>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
