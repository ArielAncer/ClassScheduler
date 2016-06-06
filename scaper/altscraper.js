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
	console.log(msg);
});
var fs = require('fs');
var data = {};
var needsUpdate = false;
var updated = {	"yc" : false,	"syms" : false,	"stern" : false };
const USERNAME "";
const PASSWORD = "";

function login() {
	casper.start('https://selfserveprod.yu.edu/pls/banprd/twbkwbis.P_WWWLogin', function() {
		casper.then(function() {
			//this.capture('1pageload.png');
			console.log("Logging in...");
			this.fillSelectors('form[name="loginform"]', {
				'input#UserID': USERNAME,
				'td#PIN input': PASSWORD
			}, false);
			//this.capture('2infoentered.png');
			this.click('input[value="Login"]');
			this.wait(500);
		});
		casper.then(function() {
			//this.capture('3afterlogin.png');
			console.log("Logged in.");
		});
	});
}
function gotoCourses(collegeCode) {
	casper.thenOpen('https://selfserveprod.yu.edu/pls/banprd/bwskfcls.p_sel_crse_search', function() {
		casper.then(function() {
			this.fillSelectors('form[action="/pls/banprd/bwckgens.p_proc_term_date"]', {
			    'select#term_input_id': '201609'
			}, true);
			this.wait(500);
			console.log("Looking up classes for Fall 2016.");
		});
		casper.then(function() {
			//this.capture('4lookupclasses.png');
		});
		casper.then(function() { 
			this.click('input[value="Advanced Search"]'); 
			this.wait(500);
		});
		casper.then(function() {
			//this.capture('5advancedsearch.png');
		});
		casper.then(function() {
			console.log("Selecting campus...");
			this.fillSelectors('form[action="/pls/banprd/bwskfcls.P_GetCrse_Advanced"]', {
				'select#ptrm_id' : collegeCode
			}, false);
			this.click('#advCourseBtnDiv input[value="Section Search"]');
			this.wait(500);
		});
		casper.then(function() {
			//this.capture('6coursepage.png');
		});
	});
	casper.then(function() {
		console.log("Displaying courses.");
	})
}
function scrapeCourses(college) {
	casper.then(function() {
		data = this.evaluate(function() {
			var data = {};
			var allLabels = {}
			var curr = "";
			var newCRN = "";
			var lastLabel = "";
			var time = "";
			var prof = "";
			var title = "";
			var label = "";
			$('table.datadisplaytable tr').each(function() {
				if ($(this).children('th').length === 1) {
					// console.log("hello");
					curr = $(this).children('th').text().replace(/ *\(.*\) */, "");
					data[curr] = {};
					allLabels[curr] = [];
					lastLabel = "";
				}
				else if ($(this).has('td')) {
					newCRN = $(this).children("td:nth-child(2)").text().replace(" ","").replace(" ","");
					if (newCRN === "") {
						if ($(this).children("td:nth-child(9)").text().replace(" ","").replace(" ","") !== "") {
							time = $(this).children("td:nth-child(10)").text().replace(/ /g, "").replace(/0(\d:\d{2})/g,"$1").replace(/([0-9])([a-z])/g,"$1 $2").toUpperCase().split("-");
							data[curr][lastLabel]['day2'] = $(this).children("td:nth-child(9)").text();
							data[curr][lastLabel]['time2start'] = time[0];
							data[curr][lastLabel]['time2finish'] = time[1];
							// console.log("Adding second time.");
						}
					}
					else {//if (!data[curr][newCRN] && newCRN !== "") {
						time = $(this).children("td:nth-child(10)").text().replace(/ /g, "").replace(/0(\d:\d{2})/g,"$1").replace(/([0-9])([a-z])/g,"$1 $2").toUpperCase().split("-");

						prof = $(this).children("td:nth-child(17)").text().replace(/ *\(P\) */g, "").replace(/ {2,}/g," ");
						title = $(this).children("td:nth-child(8)").text();
						label = title + " -- " + prof;
						allLabels[curr].push(label);
						data[curr][label] = {
							'crn' : newCRN,
							'crse' : $(this).children("td:nth-child(4)").text(),
							'title' : title,
							'credits' : parseFloat($(this).children("td:nth-child(7)").text()),
							'day1' : $(this).children("td:nth-child(9)").text(),
							'time1start' : time[0],
							'time1finish' : time[1] || "ERROR",
							'prof' : prof,
							'time2start' : "",
							'time2finish' : ""
						};
						lastLabel = label;
					}
				}
				// console.log(JSON.stringify(data, null, 3));
			});
			return [data,allLabels];
		});
		casper.then(function() {
			fs.write('alt/alt_' + college + '_classes.json', JSON.stringify(data[0], null, 3), 'w');
			fs.write('alt/alt_' + college + '_labels.json', JSON.stringify(data[1], null, 3), 'w');
			console.log('Data written to ' + college + '_classes_alt.json.');
		});
	});
}
login();
gotoCourses("D1");
scrapeCourses("yc");
gotoCourses("D2");
scrapeCourses("syms");
gotoCourses("S");
scrapeCourses("stern");
// checkForUpdates();
// casper.then(function() {
// 	if (needsUpdate) {
// 		console.log("Courses were updated.");
// 		login();
// 	}
// 	if (updated.yc) {
// 		console.log("YC courses were updated.");
// 		gotoCourses("D1");
// 		scrapeCourses("yc");
// 	}
// 	if (updated.syms) {
// 		console.log("Syms courses were updated.");
// 		gotoCourses("D2");
// 		scrapeCourses("syms");
// 	}
// 	if (updated.stern) {
// 		console.log("Stern courses were updated.");
// 		gotoCourses("S");
// 		scrapeCourses("stern");
// 	}
// });
casper.run();


// function checkForUpdates() {
// 	var dates = JSON.parse(fs.read('dates.json'));
// 	var check = {};
// 	casper.start('http://yu.edu/registrar/undergrad-schedule/', function() {
// 		check = casper.evaluate(function(dates) {
// 			console.log("Checking dates...");
// 			var ycdate = Date.parse($('div#wilfPDFTableDiv table:not([id]):first-child tr:contains("Fall 2016"):contains("Yeshiva College") td:nth-child(4)').text());
// 			var symsdate = Date.parse($('div#wilfPDFTableDiv table:not([id]):first-child tr:contains("Fall 2016"):contains("Sy Syms School of Business") td:nth-child(4)').text());
// 			var sterndate = Date.parse($('div#wilfPDFTableDiv table:not([id]):first-child tr:contains("Fall 2016"):contains("Stern College for Women") td:nth-child(4)').text());
// 			return {
// 				"yc" : ycdate,
// 				"syms" : symsdate,
// 				"stern" : sterndate
// 			};
// 		});
// 	});
// 	casper.then(function() {
// 		if (check.yc > dates.yc) {
// 			console.log("YC classes have been updated.");
// 			console.log("check.yc   : " + (new Date(check.yc)).toLocaleDateString() + "\tdates.yc: " + (new Date(dates.yc)).toLocaleDateString() );
// 			dates.yc = check.yc;
// 			needsUpdate = true;
// 			updated.yc = true;
// 		}
// 		else console.log("Maintaining current YC date of " + (new Date(dates.yc)).toLocaleDateString());
// 		if (check.syms > dates.syms) {
// 			console.log("Syms classes have been updated.");
// 			console.log("check.syms : " + (new Date(check.syms)).toLocaleDateString() + "\t\tdates.syms: " + (new Date(dates.syms)).toLocaleDateString() );
// 			dates.syms = check.syms;
// 			needsUpdate = true;
// 			updated.syms = true;
// 		}
// 		else console.log("Maintaining current Syms date of " + (new Date(dates.syms)).toLocaleDateString());
// 		if (check.stern > dates.stern) {
// 			console.log("Stern classes have been updated.");
// 			console.log("check.stern:  " + (new Date(check.stern)).toLocaleDateString() + "\t\tdates.stern: " + (new Date(dates.stern)).toLocaleDateString() );
// 			dates.stern = check.stern;
// 			needsUpdate = true;
// 			updated.stern = true;
// 		}
// 		else console.log("Maintaining current Stern date of " + (new Date(dates.stern)).toLocaleDateString());
// 		if (needsUpdate) {
// 			fs.write('dates.json', JSON.stringify(dates, null, 3), 'w');
// 			console.log("Updated file written.");
// 			console.log(JSON.stringify(dates));
// 		}
// 		else console.log("No updates, exiting.");
// 	});
// }