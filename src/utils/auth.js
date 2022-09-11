const bcrypt = require('bcrypt');

const hashPassword = async function(pass) {
    return bcrypt.hash(pass, 10);
}

const compare = async function (pass, userPass) {
    return bcrypt.compare(pass, userPass);
}

module.exports = {
    hashPassword,
    compare,
    SECRET: process.env.APP_SECRET
};