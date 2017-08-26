'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/logincontroller')


router.post('/signup', controller.signup);

router.post('/signin', controller.signin);


module.exports = router;