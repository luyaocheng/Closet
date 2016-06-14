var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.sendFile(__dirname + '/testIndex.html')
})

app.listen(3000, function(){
	console.log("This is a test from Edward!")
})


