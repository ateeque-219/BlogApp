const express = require('express');
const app = express();
app.get('/test' ,(req,res)=>{
   res.json('test_ok22');
});

app.listen(4000);