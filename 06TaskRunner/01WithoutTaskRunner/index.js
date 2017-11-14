import moment from 'moment'

function updateClock() {
	document.getElementById('time').innerHTML = "It is currently " + moment().format('h:mm:ss a');
}

function handleForm() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	document.getElementById('response').innerHTML = `Hello ${firstName}! Or do you prefer Mr./Ms. ${lastName}?`
}


document.getElementById('click').onclick = handleForm;
setInterval(updateClock, 1000);