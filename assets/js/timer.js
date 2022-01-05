function startTimer(
	duration,
	displaySelector,
	isPause,
	callbackEndTime,
	callbackPause
) {
	var timer = duration,
		minutes,
		seconds;
	var countDown = setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		displaySelector.textContent = minutes + ':' + seconds;
		if (--timer < 0) {
			callbackEndTime(countDown);
		} else if (isPause) {
			callbackPause(countDown);
		}
	}, 1000);
}
