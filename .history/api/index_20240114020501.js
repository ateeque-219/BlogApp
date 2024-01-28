const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require("mongoose");
const Users = require('./models/Users')
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const secret = 'acofonvdohfohg3030480odfh223hg2';
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const corsOptions = {
   origin: 'http://localhost:3000', 
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true,
   optionsSuccessStatus: 204,
 };
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://ateequerahman219:L6drQ1S8uzASm9Ps@cluster0.kda9c8w.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to database')).catch(err => console.log(err))

app.post('/register' ,async(req,res)=>{
   const {username,password} = req.body;
   // console.log(username,password);
   try{
   const userDoc = await Users.create({
      username, 
       password:bcrypt.hashSync(password,salt),
       });
   res.json(userDoc);
   }
   catch(e){
      res.status(400).json(e);
   }
// res.json('testok1');
});

// app.post("/login",async(req,res)=>{
//    const {username,password} = req.body;
//    //console.log(req.body)
//   const UserDoc = await Users.findOne({username});
//   if(!UserDoc)return res.status(404).json({msg: 'user never created'})
//   const passOk = bcrypt.compareSync(password,UserDoc.password);
//   console.log(passOk,username,password)
//   if(passOk){
//       jwt.sign({username,id:UserDoc._id},secret,{},(err,token)=>{
//         if(err)console.log(err);
//         res.cookie('token', token).json({
//          id:UserDoc._id,
//          username,
//         });
//       })
//   }
//   else{
//    res.status(400).json('wrong credential');
//   }
// })
app.post('/login', async (req,res) => {
   const {username,password} = req.body;
   const userDoc = await User.findOne({username});
   const passOk = bcrypt.compareSync(password, userDoc.password);
   if (passOk) {
     // logged in
     jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
       if (err) throw err;
       res.cookie('token', token).json({
         id:userDoc._id,
         username,
       });
     });
   } else {
     res.status(400).json('wrong credentials');
   }
 });
app.get("/profile" ,(req,res)=>{
   //console.log('acnfl')
   const {token} = req.cookies;
   if(!token) return res.status(404).json({msg:'token not found!'})
   jwt.verify(token,secret,(err,info)=>{
      if(err)throw err;
      res.json(info);
   });
   //res.json(req.cookies);
});


app.post("/logout",(req,res)=>{
   res.cookie('token','').json('ok');
})
app.listen(4000,()=>console.log('Server is running at port 4000'));


// L6drQ1S8uzASm9Ps
// 