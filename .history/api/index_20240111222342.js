const express = require('express');
const app = express();

// app.use(cors());
app.post('/register' ,(req,res)=>{
  return res.json('test_ok22');
});

app.listen(4000);