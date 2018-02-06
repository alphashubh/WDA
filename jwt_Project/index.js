const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const jwt=require('jsonwebtoken');

const config= require('./config');

const app= express();
app.use(bodyParser.json());
app.use(cors());

var fakeDetails={
    username: "user",
    password: "user"
}

app.post("/user", (req,res)=> {
    var details={username: req.body.user_name, user_id: "123"}
    if(fakeDetails.username===req.body.user_name && fakeDetails.password===req.body.password){
    console.log(req.body);
    //creating jwt token
        var token= jwt.sign({details}, config.secret , { expiresIn: 60 });
        //console.log(config.secret);
    //end toke creation
    res.json({'msg': "Login Successfull", access_token: token});
    }
    else{
    res.json({'msg': "Invalid Username or password"});
    }
})

app.post("/verifytoken",(req,res)=>{
    if(req.body.token){
var token=req.body.token;
    console.log(token);
    try {
     var decoded = jwt.verify(token, config.secret);
     console.log("Token verified succesfully");
     var head=req.headers.toString();
      
      console.log("request header ", req.headers.token);
      res.json({'msg': "Token Verified Successfully", access_token: token});
      
    } catch(err) {
  // err
   console.log("wrong Token", err);
   res.json({'msg': "Token is wrong or expired", access_token: token});
    }
    }
    
})


app.listen(3000);