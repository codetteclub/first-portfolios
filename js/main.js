var portfoliosDir = 'https://filename-array-generator-nataliebaker.c9users.io/portfolios';
var gallery = {
	imports: [],
	portfolios: []
};

// get auto-generated page 
$.ajax({url: portfoliosDir}).then(function(html) {
    // create temporary DOM element
    var doc = $(html);
    
    // find all links in the page
    doc.find('a').each(function() {
        var URL = $(this).attr('href');

        // add each url to the `imports` array
        gallery.imports.push(URL);
    });
    
    gallery.runImports = function() {
    	for (var i = 5; i < gallery.imports.length; i++) {
    		var URL = '../portfolios/' + gallery.imports[i];
    		$.getScript(URL.toString(), function(){
				gallery.portfolios.push(newPortfolio);
				console.log(newPortfolio);
				var createMenu = function() {
					var newOption = '<option value="%value%">%name%</option>';
					for (var i = 0; i < gallery.portfolios.length; i++) {
						var optionName = newOption.replace("%name%", gallery.portfolios[i].name);
						$('#list').append(optionName.replace("%value%", gallery.portfolios[i].oldURL));
					}
				};
				createMenu();
				
				gallery.displayPortfolio = function() {
					document.getElementById('display').innerHTML = '';
					var iframe = document.createElement('iframe');
					iframe.src = document.getElementById('list').value;
					document.getElementById('display').appendChild(iframe);
					console.log(iframe.src);
				};
			});
    	}
    	
		console.log(gallery.portfolios);
    };
	gallery.runImports();
	/*gallery.displayPortfolio = function() {
		document.getElementById('display').innerHTML = '';
		var iframe = document.createElement('iframe');
		iframe.src = document.getElementById('list').value;
		document.getElementById('display').appendChild(iframe);
		console.log(iframe.src);
	};*/
});
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