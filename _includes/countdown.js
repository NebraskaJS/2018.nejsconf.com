var countdown = document.querySelector(".countdown");
var nejsconfTime = new Date("2018-07-27T13:00:00Z").getTime();

function renderTime(date) {
	var secondsDiff = (nejsconfTime - date.getTime()) / 1000;
	var hours = Math.floor(secondsDiff / (60*60));
	var minutes = Math.floor(secondsDiff % (60*60) / 60);
	var seconds = Math.floor(secondsDiff % 60);

	return (secondsDiff > 0 ? '<span class="minus">-</span>' : "") +
		'<span class="hours">' + (hours < 10 ? "0" : "") + hours + '</span>' +
		':<span class="minutes">' + (minutes < 10 ? "0" : "") + minutes + '</span>' +
		':<span class="seconds">' + (seconds < 10 ? "0" : "") + seconds + "</span>";
}

setInterval(function() {
	countdown.innerHTML = renderTime(new Date());
}, 1000);