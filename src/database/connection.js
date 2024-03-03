const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@blog.8kwgp1e.mongodb.net/')


  .then(() => console.log('Connesso a MongoDB!'))
  .catch(err => console.error('Errore di connessione a MongoDB:', err));

module.exports = mongoose;