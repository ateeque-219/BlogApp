const express = require('express');
const app = (express);
app.get('/test' ,(req,res)=>{
   res.json('test_ok');
})

app.listen(4000);