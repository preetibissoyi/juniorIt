// router.js
const express = require('express');
const router = express.Router();
const userformcreate = require('../controller/signupcontroller');

// Define the POST route for user sign-up
router.post('/signup', userformcreate);

module.exports = router;

