var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.sendFile(__dirname + '/web_client/home.html')
})

app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.listen(3000, function(){
	console.log("This is a test from Edward!")
})


