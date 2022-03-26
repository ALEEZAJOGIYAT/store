const express = require('express');
const mongoose = require('mongoose')
const routes=require('./src/routes/signUp')
const cors=require('cors')


const app=express()
const url =
"mongodb+srv://aleeza:q2Tt77RFz7NHqiz@cluster0.nbtxw.mongodb.net/SignUp?retryWrites=true&w=majority";


app.use(express.json())
app.use(cors())


mongoose.connect(url,{
    useNewUrlParser:true,
})

app.use('/auth',routes)

app.listen(4001,()=>{
    console.warn('app is listening')
})