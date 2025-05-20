
const express = require('express') ;
const app = express() ;
const port = 3000 ;




require('./DB/db') ;
require('dotenv/config') ;


app.listen( port , ()=>{
    console.log(`this app runing on port ${port}`);
    
}) ;


