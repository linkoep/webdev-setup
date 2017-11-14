import moment from 'moment'

function updateClock() {
	document.getElementById('time').innerHTML = "It is currently " + moment().format('h:mm:ss a');
}

function handleForm() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	if (firstName == "" || lastName == "") {
		alert("Please enter a valid first and last name!");
		return;
	}
	document.getElementById('response').innerHTML = `Hi ${firstName}! Or do you prefer Mr./Ms. ${lastName}?`
}


window.onload = updateClock();
document.getElementById('click').onclick = handleForm;
setInterval(updateClock, 1000);