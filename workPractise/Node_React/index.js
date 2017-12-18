var express = require('express')
var qr = require('qr-image'); 
var bodyParser = require('body-parser');
var cors = require('cors');
var Client = require('node-rest-client').Client;

var client = new Client();
var app = express();
 
app.use(cors());
app.use(bodyParser.json());


 var input = "";
app.post('/qrcode', function(req, res) {  
   
   // input=req.body
console.log("0101010");
console.log(req);
 input=req.body.qrcode;
   
});

app.get('/downloadQr', function(req,res){

 var code = qr.image(input , { type: 'png' });
  res.setHeader('Content-type', 'image/png');  //sent qr image to client side
  code.pipe(res);

//   var code = qr.image(input, { type: 'png' });
//   res.type('png');
//   code.pipe(res);
  //code.pipe(require('fs').createWriteStream('input.png'));
})

app.listen(3080);  