const express=require('express');
const loginRouter=express.Router();
const bookdata=require('../model/bookdata');
const userdata=require('../model/userdata');


loginRouter.get('/getuser',(req,res)=>{
res.render('index',{});
});


// loginRouter.post('/check',(req,res)=>{
loginRouter.post('/check',async (req,res)=>{
    var email=req.body.email;
    var pass=req.body.pass;
    
    console.log(email,pass);
   

    await userdata.findOne(email,function(books){
        if(!email){
            console.log("not found");
        }
        else{
            console.log("found");
            res.render("books",{books});
        }
    })
    
    });



   



loginRouter.get('/',async (req,res)=>{
   
        await bookdata.find()
        .then (function(books){
            res.render("books",{
                // nav,
                // title:'Books',
                  books
            
                });
        })

  
    
    });



    module.exports=loginRouter;