const { Router } = require('express');
const { create, getAll, getOneById, updateRol, deleteRol } = require('../controllers/rol');

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOneById);
router.put('/:id', updateRol);
router.delete('/:id', deleteRol);

module.exports = router;