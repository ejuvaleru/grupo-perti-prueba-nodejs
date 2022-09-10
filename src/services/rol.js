const Rol = require('../models/rol');

const create = async function (rol) {
    try {
        const newRol = new Rol({
            name: rol.name,
            description: rol.description,
        });

        const savedRol = await newRol.save();
        return savedRol;
    } catch (error) {
        throw error;
    }
}

const getAll = async function () {
    try {
        const rols = await Rol.find();
        if (rols.length > 0) {
            return rols;
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
}

const getOneById = async function (id) {
    try {
        const rol = await Rol.findById(id);
        if (rol) {
            return rol;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

const updateRol = async function (id, rol) {
    try {
        const rolDB = await Rol.findById(id);
        if (!rolDB) return null;

        rolDB.name = rol.name;
        rolDB.description = rol.description;

        const savedRol = await rolDB.save();
        return savedRol;
    } catch (error) {
        throw error;
    }
}

const deleteRol = async function (id) {
    try {
        const rol = await Rol.findById(id);
        if (!rol) return null;
        return rol.delete();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getOneById,
    updateRol,
    deleteRol
}