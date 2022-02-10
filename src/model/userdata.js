const express=require('express');
const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/internlibrary");


const Schema=mongoose.Schema;
const userSchema=new Schema(
    {
        uname:String,
        email:String,
        pass:String,
        cpass:String,
    }
);
var userdata=mongoose.model("users",userSchema);
module.exports=userdata;