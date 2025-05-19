

const mongoose = require('mongoose') ;

const dbUrl = 'mongodb://127.0.0.1:27017/ecommerce' ;

mongoose.connect(dbUrl , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


module.exports = mongoose ;