import { useState } from 'react';
import { useRouter } from 'next/router';
const express = require('express');
const session = require('express-session');


const app = express()

app.use(session({
  secret: 's3cr3t4-k3y-f0r-my-4pplic4t10n', // Hardcoded because is a test, for production i will put this inside an .env file ;)
  resave: false,
  saveUninitialized: true,
}));

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Qui potresti fare una chiamata all'API per effettuare il login
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.status === 200) {
      
      router.push('/')
      console.log(data.status);
      
    } else {
      //login non avvenuto correttamente
      console.log(data.status);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}