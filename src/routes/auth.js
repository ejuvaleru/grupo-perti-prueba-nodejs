const { Router } = require('express');
const { onRegister } = require('../controllers/auth');

const router = Router();

router.post('/register', onRegister);

module.exports = router;