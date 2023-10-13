const express = require('express');

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)"  action="/" method="GET">
    <input type="text" name="username" id="username"><br><br>
    <button type="submit">login</button></form>`)
})
module.exports=router;