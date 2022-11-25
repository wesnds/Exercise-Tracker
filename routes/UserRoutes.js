const UserController = require('../controllers/UserController');
const router = require('express').Router();


router.post('/users', UserController.newUser);
router.get('/users', UserController.getUsers);

module.exports = router;