
const express = require('express');
const router = express.Router() ;

const {register} = require('../Controller/UserController') ;



router.post('/register' , register) ;






module.exports = router ;