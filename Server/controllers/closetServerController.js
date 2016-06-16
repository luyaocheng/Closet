var Closet = require('../models/post')

module.exports.list = function(req, res){
	Closet.find({}, function(err, results){
		res.json(results)
	})
}