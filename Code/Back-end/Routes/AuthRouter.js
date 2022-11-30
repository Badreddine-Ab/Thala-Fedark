const express = require('express')
const router = express.Router()


const {Login,Register,forgetPassword,resetPassword,Logout} = require('../Controllers/AuthController')

router.post('/login',Login)
router.post('/register',Register)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword',resetPassword)
router.get('/logout',Logout)



module.exports = router