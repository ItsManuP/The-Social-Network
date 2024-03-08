const { User }= require('./data');
const {Token } = require('./data');


async function addUserToDatabase(username,password,email,salt) {
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

async function FindUserID(username){
try {
    const user = await User.findOne({ username });
    if (user) {
        return user._id;
    } else {
        console.log('Utente non presente nel database');
        return null;
    }
} catch (error) {
    console.error('Error finding user by username', error);
    return null;
}

    }


async function addTokenUserToData(token, username){
    // dobbiamo aggiungere alla collections mongodb il token associato all'username, però non lo salviamo associato all'username bensi all'id dell'utente, quidni devo recuperare l'id in base all'username
    const user_id = await FindUserID(username);
    if(user_id){
        const newToken = new Token({
            userId: user_id,
            token: token,
        });
        await newToken.save();
        console.log('Token aggiunto al database!');
    } else {
        console.error('Errore aggiunta token al database');
    }
}


async function deleteToken(username){
    const user_exists = await FindUserID(username);
    if(user_exists){
        await Token.deleteOne({ userId: user_exists });
        console.log('Token eliminato dal database!');
    }
    else{
        console.error('Errore eliminazione token dal database');
    }
}






module.exports = { addUserToDatabase, FindUserID, addTokenUserToData, deleteToken};
