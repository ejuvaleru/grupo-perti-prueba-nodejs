const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.APP_SECRET;

const hashPassword = async function (pass) {
    return bcrypt.hash(pass, 10);
}

const compare = async function (pass, userPass) {
    return bcrypt.compare(pass, userPass);
}

const verifyToken = async function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers.authorization;

    if (!token) {
        return res.status(403).json({ status: 403, message: "A token is required for authentication" });
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({ status: 403, message: "Invalid token" });
    }
    return next();
}

const checkRol = (rols = []) => (req, res, next) => {
    if (typeof rols === 'string') {
        rols = [rols]
    }
    if (rols.length > 0 && !rols.includes(req.user.rol)) {
        // User's role is not authorized
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
    }
    // Authorization successfull
    next();
}


module.exports = {
    hashPassword,
    compare,
    SECRET,
    verifyToken,
    checkRol
};