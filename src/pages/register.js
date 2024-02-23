import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';
//both argon2 and bcrypt compilation error related to "fs" module, so i must find a way to apply an hashing algorithm to the password withouth encountering this error
// i'm gonna think how to solve this problem
// For now i forced the cache to be deleted, also deleted .next folder, reinstalled fs but doesn't work
const argon2 = require('argon2');

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
    const sanitizedEmail = sanitizeInput(email);

    const salt = await argon2.generateSalt();
    const hashedPassword = await argon2.hash(sanitizedPassword, salt);

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: sanitizedUsername, password: hashedPassword, email: sanitizedEmail, salt: salt}),
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
