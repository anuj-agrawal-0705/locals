const User = require('../models/user')
const utils = require('../utils/authToken')
const Connection = require('../models/connection')

module.exports.test = async function(req,res){
    res.send({"res":"hey you are gretting there"})
}

module.exports.signup = async function(req,res){
    const user = new User(req.body)
    const {phone} = req.body
    try{
        const finduser = await User.findOne({phone})
        if(finduser){
            return res.status(406).send({error:"User already exist"})
        }

        user.password = await utils.encryptPassword(user.password)

        console.log(user.password)
        await user.save()
        const token = await utils.getAuthToken(user)
        //console.log(token)
        res.status(201).send({user,token})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports.login = async(req,res)=>{
    try{
        const {phone, password} = req.body

        if(!phone || !password)
            return res.status(406).send({error:"All inputs are required"})

        const user = await User.findOne({phone})
        if(!user){
            return res.status(404).send({error:"User doesn't exist"})
        }
        const isValid = await utils.checkPassoword(user.password,password)
        console.log(isValid)
        if(!isValid){
            return res.status(401).send({error:"Incorrect username or password"})
        }
        const token = await utils.getAuthToken(user)
        console.log(token)
        res.status(200).send({user,token})
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports.searchUser = async(req,res)=>{
    try{
       const phone = req.body.phone
       let user = null
       if(req.user.userType == "customer"){
         user = await User.findOne({phone,userType:"merchant"})
        if(!user){
            res.status(404).send({code:404,error:"No shop found"})
        }
        
       }
      else if(req.user.userType == "merchant"){
         user = await User.findOne({phone,userType:"customer"})
        if(!user){
            res.status(404).send({code:404,error:"No customer found"})
        }
       }
       //bool isAdded = await Connection.findOne({})
       res.status(200).send({user})

    }
    catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports.profile = async(req,res)=>{
    try{
        res.send({
            user:req.user
        })
    }catch(error){
        console.error(error.message)
        res.status(400).send({error:error.message})
    }
}




