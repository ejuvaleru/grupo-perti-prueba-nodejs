const { Router } = require('express');
const { create, getAll, getOneById, updateUser, deleteUser } = require('../controllers/user');

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getOneById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;