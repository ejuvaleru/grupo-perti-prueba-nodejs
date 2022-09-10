const User = require('../models/user');

const create = async function (user) {
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
        throw error;
    }
}

const getAll = async function () {
    try {
        const users = await User.find();
        if (users.length > 0) {
            return users;
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
}

const getOneById = async function (id) {
    try {
        const user = await User.findById(id).populate('rols');
        if (user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

const updateUser = async function (id, user) {
    try {
        const userDB = await User.findById(id);
        if (!userDB) return null;

        userDB.email = user.email;
        userDB.name = user.name;
        userDB.password = user.password;
        userDB.rols = user.rols;

        const savedUser = await userDB.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async function (id) {
    try {
        const user = await User.findById(id);
        if (!user) return null;
        return user.delete();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getOneById,
    updateUser,
    deleteUser
}