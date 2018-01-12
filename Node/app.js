const express = require('express');
const bodyparser= require('body-parser');
const cors= require('cors');

const app =express();

//port number
const port = process.env.port || 3010;

//route to users
const users= require('./routes/users');
//route to inventory
const inventory= require('./routes/inventory');

//using cors for cross domain rest call
app.use(cors());

//Body Parser Middleware
app.use(bodyparser.json());

//different routes from routes folder
app.use('/users', users );
app.use('/inventory', inventory);

//Initial route 
app.get('/', (req,res) => {
    console.log("Invalid Endpoint");
    res.send("Inavlid Endpoint");
})

//running on server and port 
app.listen(port, () => {
    console.log("App started on " + port);
})