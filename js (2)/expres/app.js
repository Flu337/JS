const express = require ('express');
const app = express();

app.get ('/', function(req,res){
    res.send('<h1>привет EXPRESS</h1>')
})

app.get ('/about', function(req, res){
    res.send ('<h1> САЙТ!!! </h1>')
})

app.listen (3000)
