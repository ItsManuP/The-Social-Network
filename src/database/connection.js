const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@blog.2cmxui4.mongodb.net/')
  .then(() => console.log('Connesso a MongoDB!'))
  .catch(err => console.error('Errore di connessione a MongoDB:', err));

module.exports = mongoose;