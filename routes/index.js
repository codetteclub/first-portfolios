var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var directory = './portfolios';
var gallery = {
	fileList: [],
	portfolios: [],
	display: function() {
		for (var i = 0; i < gallery.fileList.length; i++) {
			var URL = './portfolios' + gallery.fileList[i];
			$.getScript(URL.toString(), function() {
				gallery.portfolios.push(newPortfolio);
			})
		}	
	}
};
gallery.display();
console.log(gallery.portfolios);
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
		gallery.fileList.push(f);
	});
	//console.log(gallery.fileList);
});

// get home page
router.get('/', function(req, res, next) {
	
	res.render('index', { title: 'Portfolio Gallery' });
	

});

module.exports = router;
