const express = require('express');
const router= express.Router();
const userlist= require('../controller/user');
const movielist = require('../controller/movie');

router.get('/register', (req,res) => {
    var newUser= userlist.userlist();
    var newmovielist=movielist.movielist();
    newUser.push(newmovielist);
    newUser.splice(newUser[2][0]);
    console.log("Movie Name:", newUser[2][0].movie_name.toUpperCase());
   console.log("Ratings:", newUser[2][1].Ratings);
    res.send(newUser);
})


router.get('/login', (req,res) => {
    res.send("login");
})

module.exports= router;