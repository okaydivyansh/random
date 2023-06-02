//my app for exam practice ka index.js
const express=require("express");
const app=express();
app.use(express.static('.'));
const path = require('path');
const bodyParser = require('body-parser');
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const ejs=require("ejs");
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
mongoose.connect("mongodb://127.0.0.1:27017/merapp",{useNewUrlParser:true});
const meraschema=new mongoose.Schema({
    order:Number,
    customer:Number,
    items:Number,
    amount:Number
});
const order=mongoose.model('order',meraschema);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    res.send(console.log("hi"));
})

app.post('/',function(req,res)
{
    var info={
        order:req.body.order,
       customer:req.body.customer,
      items:req.body.items,
        amount:req.body.amount};
        var me=new order(info);
        me.save().then(()=>{
            console.log("data sent in mongo");
        })
        .catch((err)=>{
            console.log(err);
        }
        )
        res.sendFile(__dirname+'/index.html');
})
app.get("/getdetails", function (req, res) {
    order.find({amount:{$gt:6}}).then( function (allDetails) {
     
     res.render("getdetails", { details: allDetails })
    
    })})
    
app.listen(8000,function(){
    console.log('server started')
});