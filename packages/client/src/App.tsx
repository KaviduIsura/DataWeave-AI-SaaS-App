import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[message, setMessage] = useState('Hello, World!')

  useEffect(() =>{
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      // .catch(error => console.error('Error fetching message:', error));
  }, [])

  return(
    <div>
      {message}
    </div>
  )
}

export default App
