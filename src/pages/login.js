import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { setCookie } from 'cookies-next';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  


  const handleSubmit = async (event) => {
    event.preventDefault();

    // API call to login
    const response = await fetch('api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setCookie('authToken', { token: "valido" }, {
        maxAge: 3600,
        sameSite: 'Lax', // Add the SameSite attribute
      });


      router.push('/')

    } else {
      console.log('Login failed:', data.status);
    }
};


   return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-1 bg-gray-100/30 dark:bg-gray-800/30">
        <div className="flex items-center justify-center min-h-[400px] py-12">
          <div className="grid gap-4 p-4 w-full max-w-sm rounded-lg sm:p-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">Enter your information below</p>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button className="w-full">Login</Button>
            </div>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
};
