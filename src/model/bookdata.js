const express=require('express');
const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/internlibrary");


const Schema=mongoose.Schema;
const bookSchema=new Schema(
    {
        title:String,
        author:String,
        genre:String,
        image:String,
        des:String
    }
);
var bookdata=mongoose.model("books",bookSchema);
module.exports=bookdata;