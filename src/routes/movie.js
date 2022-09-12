const { Router } = require('express');
const { verifyToken, checkRol } = require('../utils/auth');

const { create, getAll, getOneById, updateMovie, deleteMovie } = require('../controllers/movie');

const router = Router();

router.post('/', verifyToken, checkRol(['ADMIN']), create);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getOneById);
router.put('/:id', verifyToken, updateMovie);
router.delete('/:id', verifyToken, checkRol(['ADMIN']), deleteMovie);

module.exports = router;