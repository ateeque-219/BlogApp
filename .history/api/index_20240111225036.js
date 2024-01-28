const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.post('/register' ,(req,res)=>{
   const{username,}
//   res.json('test_ok22');
});
app.listen(4000);