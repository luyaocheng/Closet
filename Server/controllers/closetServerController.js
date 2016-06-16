var Closet = require('../models/post')

module.exports.list = function(req, res){
	Closet.find({}, function(err, results){
		res.json(results)
	})
}

module.exports.createPost = function(req, res){
	var post = new Post(req.body);
	post.save(function(err, result){
		res.json(result);
	})
}