const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const auth = require('../service/authenticate')
const jsonParser = bodyParser.json()
// Login
router.post('/login', jsonParser , auth.login)
module.exports = router
