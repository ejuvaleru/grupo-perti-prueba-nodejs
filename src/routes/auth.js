const { Router } = require('express');
const { onRegister, onLogin } = require('../controllers/auth');

const router = Router();

router.post('/register', onRegister);
router.post('/login', onLogin);

module.exports = router;