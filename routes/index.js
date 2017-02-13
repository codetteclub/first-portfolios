//all our dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

//our display function grabs the files merged from each contributor, reads them, and pushes the data to an array that we use to build the page
function display() {
	var directory = './portfolios/';
	var fileList = [];
	var portfolios = [];
	//get the list of files we will be using
	fs.readdir(directory, function(err, files) {
		if (err) return;
		files.forEach(function(f) {
			fileList.push(f);
		});
		//read each file and convert it to json
		fileList.forEach(function(p) {
			var file = directory + p;
			var portfolio = JSON.parse(fs.readFileSync(file, 'utf8'));
			portfolios.push(portfolio);
		})
		//generate the page, iterate the information from the files in the page
		router.get('/', function(req, res, next) {
			res.render('index', { title: 'Portfolio Gallery', portfolios: portfolios });
		});
	});
}
//set it all in motion!
display();
module.exports = router;