require("dotenv").config();
const express = require('express')
require("./db/mongoose")

const userRouter = require('./routes/userRoutes')

const app = express();

app.use(express.json())
app.use(userRouter)

const port = 3000;
app.listen(port,()=>{
    console.log('The app is running at port '+port)
})

