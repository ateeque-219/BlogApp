const express = require('express');
const app = express();
/
// app.use(cors());
app.get('/register' ,(req,res)=>{
 console.log(1);
});

app.listen(4000);