var Closet = require('../models/postModel')

module.exports.list = function(req, res){
	Closet.find({}, function(err, results){
		res.json(results)
	})
}