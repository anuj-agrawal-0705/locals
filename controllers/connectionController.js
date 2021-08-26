const Connection = require('../models/connection')

module.exports.addConnection = async(req,res)=>{
    const connection = new Connection(req.body)
    const {merchantId,customerId} = req.body

    try{

        const findConnection = await Connection.findOne({merchantId,customerId})
        if(findConnection){
            return res.status(403).send({findConnection,code:403,error:"User is already added in your list"})
        }
        await connection.save()
        res.status(200).send({connection,message:"User added to your list"})
    }catch(error){
        console.error(error.message)
        res.status(400).send({error:error.message})
    }
}

module.exports.myConnections = async(req,res)=>{
    const {userType,_id} = req.user
    const {page = 1,limit = 10} = req.query
    let connections = null
    let count = 0;
    try{
        if(userType == 'customer'){
             connections = await Connection.find({customerId:_id})
                .limit(limit)
                .skip((page-1) * limit)
                .exec();
             count = await Connection.countDocuments({customerId:_id})
        }
        else if(userType == 'merchant'){
             connections = await Connection.find({merchantId:_id})
                .limit(limit)
                .skip((page-1) * limit)
                .exec();
             count = await Connection.countDocuments({merchantId:_id})
        }

        res.json({
            connections,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    }catch(error){
        console.error(error)
        res.status(400).send({error:error.message});
    }
}
