import { User } from '../../database/data';

export default async function handler(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    res.status(200).json({ status: 'Loggato' });
  } else {
    res.status(401).json({ status: 'Credenziali non corrette' });
  }
}