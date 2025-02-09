import { useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3000');

socket.on('chat message', (message) => {console.log(message)});
function App() {
  const [msg, setMsg] = useState('');

  const handleSend = (e: any) => {
    e.preventDefault();
    socket.emit('chat message', msg);
  }

  return (
    <div>
        <input type="text" value={msg} placeholder='Enter your message'
          onChange={(e) => setMsg(e.target.value)}
        />
        <input type="button" value="Send" onClick={(e) => {handleSend(e)}} />
    </div>
  )
}

export default App
