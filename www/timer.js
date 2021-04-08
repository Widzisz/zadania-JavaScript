






function timer() {
	let today = new Date();

	let day = today.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	let month = today.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	let year = today.getFullYear();

	let hours = today.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	let minutes = today.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	let seconds = today.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	document.getElementById("zegar").innerHTML = day + "/" + month + "/" + year
		+ " " + "|" + " " + hours + ":" + minutes + ":" + seconds;

	setTimeout("timer()", 1000);
}


























































// function odliczanie() {
// 	var dzisiaj = new Date();

// 	var dzien = dzisiaj.getDate();
// 	var miesiac = dzisiaj.getMonth() + 1;
// 	var rok = dzisiaj.getFullYear();

// 	var godzina = dzisiaj.getHours();
// 	if (godzina < 10) godzina = "0" + godzina;

// 	var minuta = dzisiaj.getMinutes();
// 	if (minuta < 10) minuta = "0" + minuta;

// 	var sekunda = dzisiaj.getSeconds();
// 	if (sekunda < 10) sekunda = "0" + sekunda;

// 	document.getElementById("zegar").innerHTML =
// 		dzien + "/" + miesiac + "/" + rok + " | " + godzina + ":" + minuta + ":" + sekunda;

// 	setTimeout("odliczanie()", 1000);
// }