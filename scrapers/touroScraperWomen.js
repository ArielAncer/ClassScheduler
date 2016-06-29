var casper = require('casper').create({
	verbose: true, 
    // logLevel: 'debug',
	clientScripts: ["jquery.min.js"],
	pageSettings: {
		loadImages: false,
		loadPlugins: false,
		userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36'
	}
});
casper.on("remote.message", function (msg) {
	this.echo(msg);
});


function runScraper(school) {
	console.log("Loaded the course schedule for Touro College for " + school + ".");
	console.log("Scraping course table...");
	var courses = casper.evaluate(function() {
		function parseDays(param) {
			var days = "";
			switch (param) {
				case "Monday & Wednesday":
					days = 'MW';
					break;
				case "Friday":
					days = 'F';
					break;
				case "Thursday Evenings Only":
					days = 'R';
					break;
				case "Monday Only":
					days = 'M';
					break;
				case "Tuesday Only - offsite":
					days = 'T';
					break;
				case "Wednesday Only":
					days = 'W';
					break;
				case "To Be Arranged":
					days = 'TBA';
					break;
				case "Tuesday & Thursday":
					days = 'TR';
					break;
				case "Special Monday/ Wednesday Afternoon Time Slots":
					days = 'MW';
					break;
				case "Special Monday Afternoon Time Slots":
					days = 'M';
					break;
				case "Special Tuesday Afternoon Time Slots":
					days = 'T';
					break;
				case "Special Wednesday Afternoon Time Slots":
					days = 'W';
					break;
				case "Special Thursday Afternoon Time Slots":
					days = 'R';
					break;
				case "Tuesday Evening":
					days = 'T';
					break;
				case "Thursday Evening":
					days = 'R';
					break;
				case "Sunday":
					days = 'S';
					break;
				case "Special Monday Evening Time Slots":
					days = 'M';
					break;
				case "Time to Be Arranged":
					days = 'TBA';
					break;
				case "Monday - Friday":
					days = 'MTWRF';
					break;
				case "Computer Tutorials":
					days = 'TBA';
					break;
				case "On-Line Courses ":
					days = 'ONLINE';
					break;
			}

			return days;
		}
		function getTimeObject(obj, days) {
	      	return { 'start': $(obj).children('td:nth-child(8)').text().replace(" ", "").toLowerCase() || '', 
	   	    		 'end': $(obj).children('td:nth-child(9)').text().replace(" ", "").toLowerCase() || '',
	   	    		 'day': parseDays(days)
	   	    		 };
		   	// if (days != "TBA" && days != "ONLINE") {
		   		
		 //   	}
		 //   	else return {}
			// var hours = ;
			// return {'day': days, 'start': hours[0].split(" "), 'end': hours[1].split(" ") }; 
		}
		var courses = [];

		var credits = '', section = '', crn = '';
		var days = '';
		var course = {};
		console.log("Beginning iterating over all rows.");
		$('#collapseFour tr:not(:first-child)').each(function() {
		   	if ($(this).children('td').length === 1) {
		   		days = $(this).children('td').text();

		   	}
		   	else {
		   		credits = $(this).children('td:nth-child(6)').text();
		   		// if the row doesn't have credits
		   		if (!(/^[0-9]{1}$/.test(credits))) {
		   			// if there is a course title, fill currweekdays with what is in course title
		   			if (/^[\- a-zA-Z&\s\u00A0]{4,}$/.test($(this).children('td:nth-child(5)').text())) {
		   				days = $(this).children('td:nth-child(5)').text();
		   			}
		   		}
		   		else {
		   			crn = $(this).children('td:nth-child(1)').text();
		   			course = {
		   		   	    'crn': /^[0-9]+$/.test(crn)? crn : '',
		   		   	    'code': $(this).children('td:nth-child(2)').text(),
		   		   	    'section': $(this).children('td:nth-child(4)').text(),
		   		  	    'title': $(this).children('td:nth-child(5)').text(),
		   		 	    'credits': $(this).children('td:nth-child(6)').text(),
		   		   	    'instructor': $(this).children('td:nth-child(7)').text(),
		   		   	    'notes': $(this).children('td:nth-child(10)').text(),
		   		   	    'time' : [getTimeObject(this, days)],
		   		   	    'department': ''   
		   		   	}
		   			courses.push(course);
		  		}
		   	}
		});
		// console.log(JSON.stringify(courses[0]));
		console.log("Finished iterating over all rows.");
		return courses;
	});
	casper.then(function() {
		console.log("Finished scraping.");
		console.log("Writing table to touro_" + school + "_classes.json...");
		fs.write('touro_' + school + '_classes.json', JSON.stringify(courses, null, 3), 'w');
		console.log("Scraping complete.");
	});
}
var fs = require('fs');
casper.start('http://las.touro.edu/women/course-schedule/', function() {
});
casper.then(function() {
	runScraper('Women');
});
// casper.thenOpen('http://las.touro.edu/women/course-schedule/', function() {
// 	runScraper('Women');
// });

casper.run();



// stern version
		