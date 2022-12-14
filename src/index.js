const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

require('dotenv').config();
// Conexión a Base de datos
require('./database/config').dbConnection();

// Aplicación principal de Express
const app = express();

// Lectura y parseo del BODY
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Middlewares
app.use(cors());

// Rutas
app.use('/api/user', require('../src/routes/auth'));
app.use('/api/user', require('../src/routes/user'));
app.use('/api/movie', require('../src/routes/movie'));

// route middlewares
app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'It works!'
    })
});

// Inicializar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server on PORT ${PORT}`);
});