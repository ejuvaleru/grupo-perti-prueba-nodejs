const { response, request } = require('express');

let Rol = require('../services/rol');

const create = async function (req = request, res = response, next) {
    try {

        const savedRol = await Rol.create(req.body);
        return res.status(200).json({ status: 200, data: savedRol, message: "Succesfully added" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const getAll = async function (req = request, res = response, next) {
    try {
        const rols = await Rol.getAll();
        return res.status(200).json({ status: 200, data: rols, message: "Success" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const getOneById = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const rol = await Rol.getOneById(id);
        if (rol) return res.status(200).json({ status: 200, data: rol, message: "Success" });
        return res.status(404).json({ status: 404, data: null, message: "Register not found" })
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const updateRol = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const updatedRol = await Rol.updateRol(id, req.body);
        if(updatedRol) return res.status(200).json({ status: 201, data: updatedRol, message: "Successfully updated" });
        else res.status(404).json({ status: 404, data: updatedRol, message: "Register not updated because it does not exist" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const deleteRol = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const deletedRol = await Rol.deleteRol(id);
        if(deletedRol) return res.status(200).json({ status: 200, message: "Successfully deleted" });
        else return res.status(404).json({ status: 404, message: "Register not deleted because it does not exist" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getOneById,
    updateRol,
    deleteRol
}