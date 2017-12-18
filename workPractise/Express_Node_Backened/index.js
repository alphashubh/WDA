var express = require('express')
var path =require('path')
var app = express()
 
app.use(express.static(path.join(__dirname, 'src')));


app.get('/', function (req, res) {
 console.log('Server running on port 3000');
})
 
app.listen(3000)