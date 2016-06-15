var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var closetServerController = require('./Server/controllers/closetcontroller')
var mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test2db')

app.use(bodyParser())

app.get('/', function(req, res){
	res.sendFile(__dirname + '/web_client/views/home.html')
})

// app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/js', express.static(__dirname + '/web_client/js'));
app.use('/css', express.static(__dirname + '/web_client/css'));
app.use('/views', express.static(__dirname + '/web_client/views'));

app.get('/api/TestCollection2', closetServerController.list)


app.listen(3000, function(){
	console.log("This is a test from Edward!")
})


