import React, { useState } from 'react';
import { useRouter } from 'next/router';


export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();


  const registerUser = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email }),
    });

    const data = await response.json();
    // NEED FIX BECAUSE IF I GET A CORRECT LOGIN DOESNT REDIRECT, IF I REMOVE SUCCESS IT REDIRECTS ANYWAYS. SO CHE EQUAL CHECK IS NOT CORRECT
    if (data.status === 'success') { // Controlla se la registrazione è andata a buon fine
      router.push('/login'); // Reindirizza l'utente alla pagina principale
    } else {
      setMessage(data.status);
    }
  };


  return (
    <div>
      <h2>Registrati</h2>
      <form onSubmit={registerUser}>
        <label>
          Nome utente:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Registrati</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}