const {Router} = require('express');
const router = Router();
const {GetUsers, GetUser, getUserAndPassword ,postUser} = require('../controllers/usuariosController');

router.get('/', GetUsers);
router.get('/:id', GetUser);
router.post('/login', getUserAndPassword)
router.post('/', postUser);

module.exports = router;