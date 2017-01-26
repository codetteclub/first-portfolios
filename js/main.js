var portfoliosDir = 'https://filename-array-generator-nataliebaker.c9users.io/portfolios';
var gallery = {
	workers: [],
	portfolios: []
}

// get auto-generated page 
$.ajax({url: portfoliosDir}).then(function(html) {
    // create temporary DOM element
    var document = $(html);
    
    // find all links in the page
    document.find('a').each(function() {
        var URL = $(this).attr('href');

        // add each url to the `workers` array
        gallery.workers.push(URL);
    });
    console.log(gallery.workers);
});

gallery.menuDisplay = function() {
	for (var i = 5; i < gallery.workers.length; i++) {
		var newOption = document.createElement('option');
		var optionName = document.createTextNode(gallery.workers[i]);
		newOption.appendChild(optionName);
		document.getElementById('list').append(newOption);
	}
};
gallery.menuDisplay();
/*
gallery.display = function() {

	for (var i = 0; i < gallery.portfolios.length; i++) {
		var newOption = document.createElement('option');
		var title = document.createTextNode(gallery.portfolios[i].title);
		newOption.appendChild(title);
		newOption.value = gallery.portfolios[i].url;

		document.getElementById('list').append(newOption);
	}
};

gallery.display();

gallery.displayPortfolio = function() {
	document.getElementById('display').innerHTML = '';
	var iframe = document.createElement('iframe');
	iframe.src = document.getElementById('list').value;
	document.getElementById('display').appendChild(iframe);
	console.log(iframe.src);
};
*/