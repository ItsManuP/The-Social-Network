const mongoose = require('mongoose'); 



mongoose.connect('mongodb+srv://root:root@blog.8kwgp1e.mongodb.net/')
  .then(() => {
    console.log("Connessione a MongoDB effettuata con successo");
  })
  .catch((error) => {
    console.log("Connessione a MongoDB non riuscita:", error);
  });


  
module.exports = mongoose;