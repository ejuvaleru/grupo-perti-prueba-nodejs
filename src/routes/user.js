const { Router } = require('express');
const { verifyToken, checkRol } = require('../utils/auth');
const { create, getAll, getOneById, updateUser, deleteUser } = require('../controllers/user');

const router = Router();

router.post('/', verifyToken, checkRol(['ADMIN']), create);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getOneById);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, checkRol(['ADMIN']), deleteUser);

module.exports = router;