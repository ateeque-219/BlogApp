const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/register' ,(req,res)=>{
   res.json('test_ok22');
});

app.listen(4000);