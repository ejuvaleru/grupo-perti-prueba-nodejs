const User = require('../models/user');

const onRegister = async function (user) {
    try {
        const newUser = new User({
            email: user.email,
            name: user.name,
            password: user.password,
            rols: user.rols
        });

        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error
    }
}

module.exports = {
    onRegister,
}