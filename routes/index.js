var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var directory = './portfolios';

var fileList = [];
fs.realpath(directory, function(err, path) {
	if (err) {
		console.log(err);
	return;
	}
	console.log('Path is : ' + path);
});
fs.readdir(directory, function(err, files) {
	if (err) return;
	files.forEach(function(f) {
		console.log('Files: ' + f);
		fileList.push(f);
	});
	console.log(fileList);
});
/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { title: 'Portfolio Gallery' });
});

module.exports = router;
