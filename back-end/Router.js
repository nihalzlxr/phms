const express = require('express');
const { register } = require('./Functions/User');
const { loginuser } = require('./Functions/Login');
const { order, breakfast } = require('./Functions/Food');
const { status } = require('./Functions/Student');


const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(loginuser);
router.route('/order').post(order);
router.route('/foodlist').get(breakfast); 
router.route('/stdstatus').post(status);






module.exports = router;