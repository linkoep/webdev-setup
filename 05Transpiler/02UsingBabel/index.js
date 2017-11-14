var name = "User", time = "today";

document.getElementById('clickme').onclick = function PrintName() {
	document.getElementById('demo').innerHTML = `Hello ${name}, how are you ${time}?`;
}

