const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1234;
const textRouter = require('./routes/router');

//Static page
app.use(express.static('server/public'))

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: true}));


//routes 
app.use('/router', textRouter);

app.listen(port,()=>{
    console.log('Server running on Port', port)
});