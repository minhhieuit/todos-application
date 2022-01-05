// audio player
var audioMain = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const timeTaskDisplay = document.querySelector('.detail-task .time-task');
const listAudio = [
	'/assets/audio/Calm-and-Peaceful.mp3',
	'/assets/audio/Keyboard-Typing.mp3',
];

var playerState = false;
var currentIndex = 0;
var isPause = false;

var playMusic = function () {
	playerState = !playerState;

	if (playerState) {
        isPause = false;
		playing();
        startTimer(10, timeTaskDisplay, isPause, callbackEndTime, callbackPause);
	} else {
		
        isPause = true;
		startTimer(10, timeTaskDisplay, isPause, callbackEndTime, callbackPause);
	}
};
var callbackPause = function(countDown){
    console.log('Tạm dừng');
	clearInterval(countDown);
	pause();
}
var callbackEndTime = function (countDown) {
	console.log('Hết thời gian');
	clearInterval(countDown);
	pause();
};

function playing() {
	// ẩn nút play - hiển thị nút pause
	pauseBtn.classList.add('active');
	playBtn.classList.remove('active');
	audioMain.play();
	function audioAutoNext() {
		if (currentIndex < listAudio.length) {
			const path = listAudio[currentIndex];
			audioMain.src = path;
			audioMain.load();
			audioMain.play();
		} else {
			currentIndex = 0;
		}
		currentIndex++;
	}
	audioMain.addEventListener('ended', audioAutoNext);
}
function pause() {
	// ẩn nút pause - hiển thị nút play
	pauseBtn.classList.remove('active');
	playBtn.classList.add('active');
	audioMain.pause();
}
