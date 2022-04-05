function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "long" });
	minute = addZero(minute);

	document.getElementById(
		"time"
	).innerHTML = `${hour}:${minute}`;
    document.getElementById(
		"date"
	).innerHTML = `${today}, ${day} ${month}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();