var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.sendFile(__dirname + '/web_client/views/home.html')
})

// app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/js', express.static(__dirname + '/web_client/js'));
app.use('/css', express.static(__dirname + '/web_client/css'));
app.use('/views', express.static(__dirname + '/web_client/views'));


app.listen(3000, function(){
	console.log("This is a test from Edward!")
})


