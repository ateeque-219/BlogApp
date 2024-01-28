const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post('/register' ,(req,res)=>{
   const{username,password} = req.body;
    res.json({requestdata:{username,password}});
});
app.listen(4000);


// L6drQ1S8uzASm9Ps
// mongodb+srv://ateequerahman219:L6drQ1S8uzASm9Ps@cluster0.kda9c8w.mongodb.net/?retryWrites=true&w=majority