const { response, request } = require('express');

let Auth = require('../services/auth');

const onRegister = async function (req = request, res = response, next) {
    try {
        const { name, password, rols } = req.body;
        console.log('CONTROLLER ', req.body)
        const savedUser = await Auth.onRegister(req.body);
        return res.status(200).json({ status: 200, data: savedUser, message: "Succesfully Register" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = {
    onRegister
}