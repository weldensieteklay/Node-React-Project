const express = require('express');
const authController = require('../controller/controller');

const router = express.Router();

//user routes
router.post('/users/signin', authController.signIn);
router.post('/users/signup', authController.signUp);


module.exports = router;