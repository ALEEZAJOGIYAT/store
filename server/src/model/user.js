const express=require('express')
const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    cnic_no:{
        type:Number,
        required:true,
        min:13,
        max:13
    },
    first_Name:{
        type:String,
        required:true,
        min:5,
        max:20,
    },
    last_Name:{
        type:String,
        required:true,
        min:5,
        max:20,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        min:5,
        max:20,
    },
    address:{
        type:String,
        required:true,
        min:5,
        max:20,
    },
    phone_no:{
        type:Number,
        required:true,
        min:11,
        max:11,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:[true,'role is required'],
    },
    
})

const userModel= mongoose.model('User',UserSchema)
module.exports= userModel