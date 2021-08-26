const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        //shp name or customer name
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
        //unique: true,
        //required: true,
        trim: true
    },
    password:{
        type: String,
        required:true
    },
    userType:{
        //two types -1: Customer 2: Merchant
        type: String,
        required: true
    },
    ownerName:{
        //Only if userType is Merchant
        type: String
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

User = mongoose.model('User',userSchema)
module.exports = User
