import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';

var bcrypt = require('bcryptjs');



export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const sanitizeInput = (input) => {
    const sanitizedInput = DOMPurify.sanitize(input);
    return sanitizedInput;
  };

  const registerUser = async (event) => {
    event.preventDefault();

    const sanitizedUsername = sanitizeInput(username);
    const sanitizedPassword = sanitizeInput(password);
    const salt = bcrypt.genSaltSync(10);  
    const hashedpassword = bcrypt.hashSync(sanitizedPassword, salt);
    const sanitizedEmail = sanitizeInput(email);

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: sanitizedUsername, password: hashedpassword, email: sanitizedEmail, salt: salt}),
    });

    const data = await response.json();

    if (data.status === 'success') {
      router.push('/login');
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
