var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var directory = './portfolios/';



function display() {
	var fileList = [];
	var portfolios = [];
	fs.readdir(directory, function(err, files) {
		if (err) return;
		files.forEach(function(f) {
			fileList.push(f);
		});
		//console.log(fileList);
		fileList.forEach(function(p) {
			var file = directory + p;
			//console.log(file);
			var portfolio = JSON.parse(fs.readFileSync(file, 'utf8'));
			//console.log(portfolio.name);
			portfolios.push(portfolio);
		})
		console.log(portfolios);
		router.get('/', function(req, res, next) {
	
	res.render('index', { title: 'Portfolio Gallery', portfolios: portfolios });
	

});
	});
}
//console.log(portfolios);

// get home page

display();
module.exports = router;
