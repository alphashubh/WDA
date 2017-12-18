var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
 
app.use(cors());
app.use(bodyParser.json());


 var input = {};

app.post('/user', function(req, res) {  
   
   // input=req.body
console.log(req.body.inputName);
console.log(req.body.userName);
 input={user:req.body.inputName, userName:req.body.userName};


res.send(input);
   
});

app.get('/user', function(req,res){
    res.send(input);
});


app.listen(3000);  