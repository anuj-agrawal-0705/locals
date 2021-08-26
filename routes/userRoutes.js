const express = require("express")
const userRouter = new express.Router()
const controlls = require('../controllers/userController')
const auth = require('../middleware/auth')


userRouter.post('/test', controlls.test)
userRouter.post('/register', controlls.signup)
userRouter.post('/login', controlls.login)
userRouter.post('/search',auth, controlls.searchUser)
userRouter.get('/profile',auth, controlls.profile)

module.exports = userRouter