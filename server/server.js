const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1234;

//Static page
app.use(express.static('server/public'))

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port,()=>{
    console.log('Server running on Port', port)
});