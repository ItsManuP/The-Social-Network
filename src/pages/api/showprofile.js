import { User } from '../../database/data';
const puppeteer = require('puppeteer');



export default async function handler(req, res) {
  const { username} = req.body;

  try {
    // Verifica se l'utente esiste già
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      
    }
      

  } catch (error) {
    res.status(500).json({ success: false, message: "L'utente non è salvato nel database" });
  }
}