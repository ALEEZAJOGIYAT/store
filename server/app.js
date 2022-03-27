const express = require('express');
const mongoose = require('mongoose')
const userRouter=require('./src/routes/userRoutes')
const cors=require('cors')


const app=express()
const url =
"mongodb+srv://aleeza:q2Tt77RFz7NHqiz@cluster0.nbtxw.mongodb.net/Store?retryWrites=true&w=majority";


app.use(express.json())
app.use(cors())


mongoose.connect(url,{
    useNewUrlParser:true,
})

app.use('/user',userRouter)

app.get("/",(req,res)=>{
    res.send('app is runing')
})

app.listen(4001,()=>{
    console.warn('app is listening')
})