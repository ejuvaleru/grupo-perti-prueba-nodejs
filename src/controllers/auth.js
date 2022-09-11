const { response, request } = require('express');

let Auth = require('../services/auth');

const onRegister = async function (req = request, res = response) {
    try {
        const savedUser = await Auth.onRegister(req.body);
        return res.status(200).json({ status: 200, data: savedUser, message: "Succesfully Register" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const onLogin = async function (req = request, res = response) {
    try {
        const result = await Auth.onLogin(req.body, res);
        if(result.data == null && !result.token) return res.status(404).json(result);
        return res.status(200).json({ status: 200, data: result, message: "Succesfully Logged In" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = {
    onRegister,
    onLogin
}