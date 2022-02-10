const express=require('express');
const booksRouter=express.Router();
const bookdata=require('../model/bookdata');

// var bookss=[
//     {title:"tom & jerry",author:"joseph",genre:"cartoon",img:"tom.jpg"},
//     {title:"harry potter",author:"j.k rowling",genre:"fantacy",img:"Harry.jpg"},
//     {title:"pathummayude aadu",author:"basheer",genre:"life",img:"basheer.jpg"},
    
// ]

// for books

booksRouter.get('/',async (req,res)=>{
    await bookdata.find()
    .then (function(books){
        res.render("books",{
            // nav,
            // title:'Books',
              books
        
            });
    })
   
});

//add book

booksRouter.get('/add',(req,res)=>{
    res.render("addbooks");
    
 });
// loginpage

booksRouter.get('/home',(req,res)=>{
    res.render("index");
    
 });

 booksRouter.post('/dataadd', function (req, res) {

    var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image,
        des:req.body.des
    }
     console.log(item)  ;
    const book = new bookdata(item);
    book.save();
    res.redirect('/books');

})

//singlebook

booksRouter.get('/:id',function (req,res){
    const id=req.params.id;
     bookdata.findOne({_id: id})
    .then(function(book){
        res.render('book',{
             book
        })
        // console.log("hi");
    })
 });
// delete book
booksRouter.post('/delete',(req,res)=>{
    const id = req.body.id;
    bookdata.findOneAndDelete({_id:id})
    .then(function(){
        res.redirect('/books');
    })
});
// edit book
booksRouter.post('/edit',(req,res)=>{
    const id = req.body.id;
    bookdata.findById(id,function(err,data){
        if(err){
            throw err;
        }
        res.render('editbook',{data})
    })
})

// update book
booksRouter.post('/update', function (req, res) {
    
     bookdata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
           if (err) {
               res.json({ status: "Failed" });
           }
            else if (data.n == 0) {
                res.json({ status: "No match Found" });
            }
           else {
               res.redirect("/books");
           }
   
       }) 
   })

// for books

module.exports=booksRouter;