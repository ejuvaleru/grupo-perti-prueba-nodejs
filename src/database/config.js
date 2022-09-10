const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN).then(_ => console.log('DB Online'));
    } catch (error) {
        console.error(error)
        throw Error('Error en la base de datos - Hable con el admin ', error);
    }
}

module.exports = {
    dbConnection,
    SECRET: process.env.APP_SECRET
};