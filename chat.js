const express = require('express');
const fs=require('fs');
const router=express.Router();



router.get('/',(req,res,next)=>{
    console.log("in get method")
    var data=fs.readFileSync("message.txt",{ encoding: 'utf8', flag: 'r' })
    if(data==""){
        data="No message"
    }
    res.send(`${data} <br><form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">\
        <input type="text" name="chat" id="chat"><br>\
        <input type="hidden" name="username" id="username"><br>\
        <button type="submit">Send</button></form>`)
    
   
})

router.post('/',(req,res,next)=>{
    // console.log(req.body.username);
    // console.log(req.body.chat);

    fs.writeFileSync("message.txt",` ${req.body.username} : ${req.body.chat}`,{flag:'a'},(err)=>{
        err?console.log(err):res.redirect("/");
    })

    // console.log(`${req.body.username} : ${req.body.chat}`)
    res.redirect('/');

})

module.exports=router;