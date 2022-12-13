const express = require('express')
const router = express.Router()

const { verify_email, verify_email_rest } = require('../Utils/verify_email')
router.get('/verify_email/:token', verify_email)
router.get('/forgetPassword/:token', verify_email_rest)

module.exports = router