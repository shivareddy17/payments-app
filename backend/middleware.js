const JWT_SCRET = require("./config")
const jwt =require('jsonwebtoken')

function userMiddleware(req,res,next){
    const token =req.headers.authorization

    if(!token){
        res.json({
            msg:"invalid token"
        })

    }

    const response=jwt.verify(token,JWT_SCRET)

    if(response){
        req.id=response.id
        next()
    }
}

module.exports={
    userMiddleware
}