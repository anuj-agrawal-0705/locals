const express = require("express")
const userRouter = new express.Router()
const controlls = require('../controllers/userController')


userRouter.post('/test', controlls.test)
userRouter.post('/register', controlls.signup)

module.exports = userRouter