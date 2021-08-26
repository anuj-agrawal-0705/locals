const express = require("express")
const connectionRouter = new express.Router()
const controlls = require('../controllers/connectionController')
const auth = require('../middleware/auth')

connectionRouter.post('/addConnection',auth,controlls.addConnection)
connectionRouter.get('/connections',auth,controlls.myConnections)

module.exports = connectionRouter