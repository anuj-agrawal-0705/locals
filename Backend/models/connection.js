const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    phone:{
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    }
})