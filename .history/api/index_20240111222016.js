const express = require('express');
const app = express();
const cors = require('cors');
// app.use(cors());
app.post('/register' ,(req,res)=>{
 console.log(1)
});

app.listen(4000);