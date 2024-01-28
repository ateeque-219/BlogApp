const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Users = require('./models/Users')
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ateequerahman219:L6drQ1S8uzASm9Ps@cluster0.kda9c8w.mongodb.net/?retryWrites=true&w=majority')
app.post('/register' ,(req,res)=>{
   const{username,password} = req.body;
   Users.create({
      username,
      password });
    res.json({requestdata:{username,password}});
});
app.listen(4000);


// L6drQ1S8uzASm9Ps
// 