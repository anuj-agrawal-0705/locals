const mongoose = require('mongoose')

//which customer and consumers are connected
const connectionSchema = new mongoose.Schema({
    merchantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 
    amountPending:{
        type: Number,
        default: 0,
    }
})

const Connection = mongoose.model("Connection", connectionSchema)
module.exports = Connection