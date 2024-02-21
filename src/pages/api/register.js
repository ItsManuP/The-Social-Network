import {addUserToDatabase } from '../../database/createusers';
import { User } from '../../database/data';


export default async function handler(req, res) {
  const { username, password, email } = req.body;

  try {
    // Verifica se l'utente esiste già
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ success: false, message: 'Nome utente già esistente' });
      return;
    }
      
    // Crea un nuovo utente
    const newUser = await addUserToDatabase(username, password, email);

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Errore zio" });
  }
}