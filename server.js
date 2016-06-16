var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var closetServerController = require('./Server/controllers/closetServerController')

mongoose.connect('mongodb://localhost/closetTestDb')

var app = express()
app.use(bodyParser.urlencoded({	extended: true }))
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.sendFile(__dirname + '/web_client/views/home.html')
	// /res.send("Hi this message is sending from Express()~~")
})

app.use('/api', require('./Server/routes/api'))

app.use('/js', express.static(__dirname + '/web_client/js'));
app.use('/css', express.static(__dirname + '/web_client/css'));
app.use('/views', express.static(__dirname + '/web_client/views'));
app.use('/resources', express.static(__dirname + '/web_client/resources'));

app.get('/api/posts', closetServerController.list)


app.listen(3000, function(){
	console.log("This is a test from Edward!")
})


