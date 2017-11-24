var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
 
app.use(cors());
app.use(bodyParser.json());


 var input = "";
app.post('/user', function(req, res) {  
   
   // input=req.body
console.log(req.body.inputName);
 input=req.body.inputName;
res.send(input);
   
});




app.listen(3000);  