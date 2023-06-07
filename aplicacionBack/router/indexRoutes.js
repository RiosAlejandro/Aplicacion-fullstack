const express = require('express');
const loginRegisterController = require('../controllers/loginRegisterController');

const router = express.Router();

/**LOGIN Y AND REGISTER */
router.get('/login', loginRegisterController.login);
router.get('/register', loginRegisterController.register);

module.exports = router;
