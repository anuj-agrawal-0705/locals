const Connection = require('../models/connection')

module.exports.addUserToList = async(req,res)=>{
    const connection = new Connection(req.body)

    try{
        const findConnection = Connection.findOne({merchantId,customerId})
        if(findConnection){
            res.status(403).send({code:403,error:"User is already added in your list"})
        }
        await connection.save()
        res.status(200).send({message:"User added to your list"})
    }catch(error){
        res.status(400).send(error)
    }
}