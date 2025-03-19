const express =require("express")
const user=require('./userRouter')
const router=express.Router()

router.use('/user',user)

module.exports=router