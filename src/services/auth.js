const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Utils = require('../utils/auth');

const onRegister = async function (user) {
    try {
        const encryptedPassword = await Utils.hashPassword(user.password);

        const newUser = new User({
            email: user.email,
            name: user.name,
            password: encryptedPassword,
            rols: user.rols
        });

        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error
    }
}

const onLogin = async function(user, res) {
    const {email, password} = user;

    // Verify email
    const userFromDB = await User.findOne({email});
    if(!userFromDB) return { status: 404, data: null, message: "Email not found" };

    //Verify password
    const isMatch = await Utils.compare(password, userFromDB.password);
    if(!isMatch) return { status: 404, data: null, message: "Incorrect password" };

    const token = jwt.sign({
        user_id: userFromDB._id,
        rol: userFromDB.rols[0],
        email: email
    },  Utils.SECRET, {"expiresIn": "1 days"});

    let result = {
        _id: userFromDB._id,
        name: userFromDB.name,
        email: userFromDB.email,
        rols: userFromDB.rols,
        creationDate: userFromDB.creationDate,
        token: `Bearer ${token}`,
        expiresIn: 160
    };
    return result;
}

module.exports = {
    onRegister,
    onLogin
}