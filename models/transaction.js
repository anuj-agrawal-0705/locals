const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true,
    },
    merchantId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }, 
},
{timestamps: true}
)

const Transaction = mongoose.model("Transaction",transactionSchema)
module.exports = Transaction