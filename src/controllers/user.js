const { response, request } = require('express');

let User = require('../services/user');

const create = async function (req = request, res = response, next) {
    try {

        const savedUser = await User.create(req.body);
        return res.status(200).json({ status: 200, data: savedUser, message: "Succesfully added" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const getAll = async function (req = request, res = response, next) {
    try {
        const users = await User.getAll();
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const getOneById = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const user = await User.getOneById(id);
        if (user) return res.status(200).json({ status: 200, data: user, message: "Success" });
        return res.status(404).json({ status: 404, data: null, message: "Register not found" })
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const updateUser = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const updatedUser = await User.updateUser(id, req.body);
        if(updatedUser) return res.status(200).json({ status: 201, data: updatedUser, message: "Successfully updated" });
        else res.status(404).json({ status: 404, data: updatedUser, message: "Register not updated because it does not exist" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const deleteUser = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const deletedUser = await User.deleteUser(id);
        if(deletedUser) return res.status(200).json({ status: 200, message: "Successfully deleted" });
        else return res.status(404).json({ status: 404, message: "Register not deleted because it does not exist" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getOneById,
    updateUser,
    deleteUser
}