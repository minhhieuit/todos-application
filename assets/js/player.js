// audio player
var audioMain = document.getElementById('audio-player');

var playerState = false;
var playMusic = function () {
	const playBtn = document.getElementById('play');
	const pauseBtn = document.getElementById('pause');

	playerState = !playerState;

	// tự động next bài
	const listAudio = [
        '/assets/audio/Calm-and-Peaceful.mp3',
		'/assets/audio/Keyboard-Typing.mp3',
	];
	// khởi tạo khi mở ứng dụng sẽ chơi bản nhạc mặc định

    var currentIndex = 0;
	if (playerState) {
		// ẩn nút play - hiển thị nút pause
		pauseBtn.classList.add('active');
		playBtn.classList.remove('active');
		audioMain.play();
		function audioAutoNext() {
            if(currentIndex < listAudio.length)
			{
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
	} else {
		audioMain.pause();
		// ẩn nút pause - hiển thị nút play
		pauseBtn.classList.remove('active');
		playBtn.classList.add('active');
	}
};