var restful = require('node-restful')
var mongoose = restful.mongoose

var postSchema = new mongoose.Schema({
	authorName	: String,
	talkMode	: String,
	postTime	: String,
	postCat		: String,
	postBody	: String,
	postLikes	: Number,
	postCommentsLikes : Number,
	postComments: String

})

module.exports = restful.model('Posts', postSchema)