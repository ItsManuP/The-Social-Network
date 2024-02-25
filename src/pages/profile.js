import React from "react"
import { useRouter } from "next/router";
const express = require('express');
const session = require('express-session');

function profile() {
    const router = useRouter();
    // request user's data logged in
    //const isLogged = localStorage.getItem('isLogged');
    //localStorage are not available on nodejs, also sessions are not supported, so i must use an external library like express-session and replicate session in this way.

    if (isLogged === null) {
        router.push('/login');
    } else {
    const utente = localStorage.getItem('username');
    const response = fetch('api/user', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
    });

    return (
        <div className="profilo">
            <h1>{utente.nome}</h1>
            <p>{utente.email}</p>
    
        </div>
    );
}
}
export default profile;
