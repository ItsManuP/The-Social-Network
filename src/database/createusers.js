const { User } = require('./data');

async function addUserToDatabase(username,password,email) {
    try {
        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password,
            salt
        });

        // Save the user to the database
        await newUser.save();

        console.log('Utente aggiunto al database!');
    } catch (error) {
        console.error('Errore aggiunta utente al database', error);
    }
}


module.exports = { addUserToDatabase };
