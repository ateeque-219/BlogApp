const express = require('express');
const app = express();
const cors = require('cors');
// app.use(cors());
app.sent('/register' ,(req,res)=>{
 console.log(1);
});

app.listen(4000);