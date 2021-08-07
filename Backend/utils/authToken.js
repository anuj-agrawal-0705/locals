const jwt = require('jsonwebtoken')
const User = require('../models/user')

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