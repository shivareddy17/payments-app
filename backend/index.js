const express =require('express')
const mongoose=require('mongoose')
const route =require('./routes/index')
const app=express()

app.use(express.json())

app.use('/api/v1',route)
app.get('/',(req,res)=>{
    res.json({
        msg:"backend working"
    })
})

async function connct() {
   await mongoose.connect('mongodb+srv://shivareddy1701:Ni2Enj5bWsWGO9Kl@cluster0.ajfm0.mongodb.net/payment-app')
   app.listen(3000)

}
connct()