import { User } from '../../database/data';
import { addTokenUserToData } from '@/database/query';

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  const { username, password } = req.body;
  

  const user = await User.findOne({ username });

  const secretKey = 'test';

  function generateToken(username) {
    const payload = {
      username,
      exp: Math.floor(Date.now() / 1000) + 3600, // Scadenza a 1 ora
    }
    const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });
    return token;
  }

  if (user) {
    const salt = user.salt;
    const isPasswordValid = bcrypt.compareSync(password, user.password); // Compara la password chiara con l'hash salvato
    
    if (isPasswordValid) {
    res.status(200).json({ status: 'Login effettuato correttamente', token: 'Token creato correttamente', user: username});
    token = generateToken(username);       
    addTokenUserToData(token, username);
  } else {
      res.status(401).json({ status: 'Credenziali non corrette' });
    }
    console.log(res.status);
  }
}


