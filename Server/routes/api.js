var express = require('express')
var router = express.Router()

var Post = require('../models/post')

Post.methods(['get','put','post','delete'])
Post.register(router, '/posts')

module.exports = router;