var moment = require('moment');

function printTime() {
	document.getElementById("demo").innerHTML = "You clicked the button at: " + moment().format('h:mm:ss a');
}