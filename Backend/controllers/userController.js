const User = require('../models/user')
const utils = require('../utils/authToken')

module.exports.test = async function(req,res){
    res.send({"res":"hey you are gretting there"})
}

module.exports.signup = async function(req,res){
    const user = new User(req.body)
    try{

        console.log(req.body.name)
        await user.save()
        console.log(user._id)
        const token = await utils.getAuthToken(user)
        console.log(token)
        res.status(201).send({user})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}


