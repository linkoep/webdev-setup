var moment = require('moment');


document.getElementById('clickme').onclick = function printTime() {
	document.getElementById('demo').innerHTML = "You clicked the button at: " + moment().format('h:mm:ss a');
}
