
//import express to create server, mongoose to connect to mongos database  , 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./Schema.js");
//declare listen port number
port = 5000;
// usee get method to send response of the requested result
app.get("/subtractnumbers/:a/:b", (req, res) => {   
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const c = a - b;
    res.send(`Total numbers are: ${c}`);
});


app.get("/name", (req, res) => {
    console.log(req.body);
    res.send("Hello " + req.query.name);       //http://localhost:5000/name?name=amna

  });

  app.get("/main", (req, res) => {
     res.sendFile(__dirname + "/main.html");
     });
    
//connect to database
     mongoose.connect("mongodb+srv://amna:12345@cluster0.rqyr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     .then(()=>{
      console.log("connected to database");
     }).catch(()=>{
      console.log("connection failed");
     });
     
// Create records / post 
app.post("/aa", async (_, res) => {
    const newArticle = new db();
    newArticle.name = "aaa";
    newArticle.age = 20;
    newArticle.gender = "male";
    newArticle.dateofpublish = new Date("1990-09-01");
    await newArticle.save();
    res.send(newArticle);
});

// Read records / get
app.get("/aa", async (_, res) => {  
    const articles = await db.find(); 
    res.send(articles);
});

//http://localhost:5000/
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  
});






