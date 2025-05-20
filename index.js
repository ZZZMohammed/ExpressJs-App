
const express = require('express') ;
const app = express() ;
const port = 3000 ;

const userRoute = require('./Routes/route') ;

require('dotenv/config') ;
require('./DB/db') ;


app.use(express.json()) ;
app.use('/api' , userRoute) ;


app.listen( port , ()=>{
    console.log(`this app runing on port ${port}`);
    
}) ;


