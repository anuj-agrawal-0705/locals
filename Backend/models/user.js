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
        required:true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        //required: true,
        trim: true
    },
    userType:{
        //two types -1: Customer 2: Merchant
        type: String,
        required: true
    },
    shopName:{
        //Only if userType is Merchant
        type: String
    }
})

User = mongoose.model('User',userSchema)
module.exports = User
