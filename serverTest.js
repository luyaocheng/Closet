var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose
	bodyParser = require('body-parser')
	// methodOverride = require('method-override')


var app = express();
app.use(bodyParser())
// app.use(methodOverride)

	// app.use(express.bodyParser())
	// app.use(express.methodOverrider())


mongoose.connect('mongodb://localhost:27017/test2db')

var PostSchema = mongoose.Schema({
	authorName	: String,
	talkMode 	: String,
	postTime	: String,
	postCat		: String,
	postBody	: String,
	postLikes	: Number
	// postComments: String
})

var Posts = restful.model('posts', PostSchema)
Posts.methods(['get','put','post','delete'])
Posts.register(app, '/api/posts')

app.listen(3000, function(){
	console.log("Test server connected successful!")
})
