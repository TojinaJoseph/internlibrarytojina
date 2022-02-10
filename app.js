const express=require('express');
const bodyparser=require('body-parser');
const path = require('path');
const cors = require('cors');

// const nav=[
//     {link:'/books',name:'Books'},
//     {link:'/authors',name:'Authors'},
//     {link:'/admin',name:'Addbook'},
//     {link:'/admin/author',name:'Addauthors'}
// ]


// const authorsRouter=require('./src/routes/authorroutes');
// const adminRouter=require('./src/routes/adminroutes');


const app=express();
const port=4000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , './public')));

app.set("view engine","ejs");
app.set("views","./src/views");



const loginRouter = require('./src/routes/loginroutes');
const booksRouter=require('./src/routes/booksroutes');
const signupRouter = require('./src/routes/signuproutes');


 app.use(cors());

 app.use('/login',loginRouter); 
 app.use('/books',booksRouter);
 app.use('/signup',signupRouter); 

app.get('/',(req,res)=>{
    res.render("index",{
    });

});


app.listen(port,()=>{
console.log("server ready at "+port);
});
