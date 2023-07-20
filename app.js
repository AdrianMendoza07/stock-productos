var express = require('express')
var mysql = require('mysql')
var env = require('dotenv').config()


var app = express()

app.get('/', function(req,res){
    res.send('App started')
})

const port = process.env.port
app.listen(port, function(){
    console.log('Server running?, Port number is:' + port)
})