const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports.getAuthToken = async function(userBody){
    const token = jwt.sign(
        {userId:userBody._id, phone:userBody.phone}, 
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h"
        }
    );
    return token

}

module.exports.encryptPassword = async(password)=>{
   const hashedPassword = await bcrypt.hash(password,8)
    return hashedPassword
}

module.exports.checkPassowrd = async(hash, password)=>{
    const isValidPassword = await bcrypt.compare(password, hash)
    return isValidPassword
}