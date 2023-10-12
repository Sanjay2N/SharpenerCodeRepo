const http=require('http');
const express=require("express");

const app=express();
const rout=require('./routes');

app.use((req,res,next)=>{
    console.log("in the middleware");
    next();//allows to request tot continue to next middleware in line
});
app.use((req,res,next)=>{
    console.log("in the middleware 2")
    // res.setHeader('Content-type','text/html')
    // res.send("<h1>hello</h1>");
    res.send( { key1: 2 })
})

// const server=http.createServer(rout.handler);
// const server=http.createServer(app);
// server.listen(400);

app.listen(4);