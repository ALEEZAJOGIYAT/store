const express=require('express')
const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({

    store_type:{
        type:String,
        required:[true,'Select any one type of store']
    },
   name:{
        type:String,
        required:[true,'Name of product is required']
    },
    image:{
        type:String,
        required:[true,'Add Image of Product as Sample']
    },
    description:{
        type:String,
        required:[true,'Description is required']
    },
    price:{
        type:Number,
        required:[true,'Mention the Price of Product']
    },
    quantity:{
        type:Number,
        min:1,
        max:4,
    }    
})

const productModel= mongoose.model('user',ProductSchema)
module.exports= productModel