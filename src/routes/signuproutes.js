const express=require('express');
const signupRouter=express.Router();
const userdata=require('../model/userdata');



signupRouter.post('/adduser',async (req,res)=>{

    var user={
        uname:req.body.uname,
        email:req.body.email,
        pass:req.body.pass,
        cpass:req.body.cpass
    }
     console.log(user)  ;
    const newuser = new userdata(user);
    await newuser.save();
    res.redirect('/login/getuser');

});



signupRouter.get('/getuser',(req,res)=>{

res.render('index',{});




});


signupRouter.get('/',(req,res)=>{

res.render("signup");

});

signupRouter.get('/home',(req,res)=>{

    res.redirect("/login");
    
    });

    // signupRouter.get('/login',(req,res)=>{

    //     res.redirect("/login");
        
    //     });

module.exports=signupRouter;