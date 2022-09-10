const { Router } = require('express');
const { create, getAll, getOneById, deleteMovie, updateMovie } = require('../controllers/movie');

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOneById);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;