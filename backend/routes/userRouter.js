const express= require('express')

const router=express.Router()

router.get('/',(req,res)=>{
res.json({
    msg:"user end point from routes"
})
})
module.exports=router;