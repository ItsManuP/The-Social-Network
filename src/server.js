// server.js

const express = require('express');
const app = express();


app.use(express.json()); // Middleware per analizzare il corpo delle richieste POST


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});