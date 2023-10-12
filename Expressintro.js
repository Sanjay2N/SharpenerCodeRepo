const http=require('http');
const express=require("express");
const bodyparser=require('body-parser')



const app=express();
app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<html><form action="/product",method="POST"> \
    <input type="text" name="title" id=""> \
        <button type="submit">submit</button>\
</form>\
</html>');
    
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    
});

app.use('/',(req,res,next)=>{
    res.send("<h1>in the url /</h1>");//allows to request tot continue to next middleware in line
});

// const server=http.createServer(rout.handler);
// const server=http.createServer(app);
// server.listen(400);

app.listen(500);