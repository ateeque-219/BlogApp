const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());

mongoose.connect('')
app.post('/register' ,(req,res)=>{
   const{username,password} = req.body;
    res.json({requestdata:{username,password}});
});
app.listen(4000);


// L6drQ1S8uzASm9Ps
// 