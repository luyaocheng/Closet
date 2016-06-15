var mongoose = require('mongoose')

module.exports = mongoose.model('Posts', {
	authorName	: String,
	talkMode 	: String,
	postTime	: String,
	postCat		: String,
	postBody	: String,
	postLikes	: String,
	postComments: String
})