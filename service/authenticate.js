const jwt = require("jsonwebtoken")
const express = require('express')
const router = express.Router()
const app = express()
const tokenList = {}
const db = require('./connect-mysql')
const bcrypt = require('bcrypt')

// LOGIN
exports.login = (req,  res) => {
    const postData = req.body;
    if(!postData) {
        res.status(400)
        res.send({
            message: 'Login Error'
        })
        return
    }
    db.U
    const user = {
        "email": postData.email,
        "password": postData.password
    }
}
