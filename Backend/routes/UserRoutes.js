const express = require('express');
const router  =  express.Router();
const { loginUser } = require('../controllers/UserControllers');
const { signupUser } = require('../controllers/UserControllers');


//Login route
router.post('/login',loginUser);


//signup route
router.post('/signup',signupUser);


module.exports = router;