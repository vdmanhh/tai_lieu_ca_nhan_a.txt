const express = require('express')
const router = express.Router();
const {adminCheck,authCheck} = require('../mildware/auth')
const {createUser,currentUser,forgetPass} = require('../controller/user')
router.post('/create-or-update',authCheck,createUser)
router.post('/current-user',authCheck,currentUser)
router.post('/forget-pass',forgetPass)
router.post('/check-admin',adminCheck,authCheck,currentUser)
module.exports = router