const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Users = require('./models/Users')
const bcrypt = require('bcrypt');
// const corsOptions = {
//    origin: 'http://localhost:3000', 
//    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//    credentials: true,
//    optionsSuccessStatus: 204,
//  };
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ateequerahman219:L6drQ1S8uzASm9Ps@cluster0.kda9c8w.mongodb.net/?retryWrites=true&w=majority')
app.post('/register' ,async(req,res)=>{
   const {username,password} = req.body;
   // console.log(username,password);
   try{
   const userDoc = await Users.create({
      username, 
       password:bcrypt.hashSync(password,)
       });
   res.json(userDoc);
   }
   catch(e){
      res.status(400).json(e);
   }
// res.json('testok1');
});


app.listen(4000);


// L6drQ1S8uzASm9Ps
// 