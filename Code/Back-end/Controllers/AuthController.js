const apiError = require('../Utils/ErrorUtils')

// method : post
// url : api/auth/login
// acces : Public
const Login =async (req,res,next)=> {
res.send('this is a login controler')
}

// method : post
// url : api/auth/register
// acces : Public
const Register =async (req,res,next)=> {
   res.send('This is a register controller').status(200)
}

// method : post
// url : api/auth/resetPassword
// acces : Public
const resetPassword =async (req,res,next)=> {
    res.send('this is a resetPassword controler')
}

// method : post
// url : api/auth/forgetPassword
// acces : Public
const forgetPassword =async (req,res,next)=> {
    res.send('this is a forgetPassword controler')
}

// method : get
// url : api/auth/logout
// acces : Prive
const Logout =async (req,res,next)=> {
    res.send('this is a logout controler')
}

module.exports = {
    Login,
    Register,
    resetPassword,
    forgetPassword,
    Logout
}