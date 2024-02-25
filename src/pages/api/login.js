import { User } from '../../database/data';
import { useRouter } from 'next/router';
var bcrypt = require('bcryptjs');

export default async function handler(req, res) {
  const { username, password } = req.body;
  

  const user = await User.findOne({ username });
  if (user) {
    const salt = user.salt;
    const isPasswordValid = bcrypt.compareSync(password, user.password); // Compara la password chiara con l'hash salvato

    if (isPasswordValid) {
      res.status(200).json({ status: 'Login effettuato correttamente' });
      router.push('/');

    } else {
      res.status(401).json({ status: 'Credenziali non corrette' });
    }
  }
}


