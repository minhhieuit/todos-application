var myModal = document.getElementById('modal');
var btnClose = document.querySelector('#modal .close');

btnClose.onclick = function () {
	myModal.style.display = 'none';
};

window.onclick = function (e) {
	if (e.target == myModal) closeModal();
};

function closeModal() {
	myModal.style.display = 'none';
}

function showListTodos() {
	myModal.style.display = 'block';
}

function go_full_screen() {
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
}
var playerState = false;
var playMusic = function (state) {
	const playBtn = document.getElementById('play');
	const pauseBtn = document.getElementById('pause');

	var audioMain = new Audio('/assets/audio/Calm-and-Peaceful.mp3');
	/**
	 * Play audioMain
	 */
	// // nhạc chính
	// var audioMain = new Audio('/assets/audio/Calm-and-Peaceful.mp3');
	// audioMain.play();
	// audioMain.loop = true;

	// // âm thanh mưa
	// var audioRain = new Audio('/assets/audio/UPA6GE2-rain.mp3');
	// audioRain.play();
	// audioRain.loop = true;
	// audioRain.volume = 0.2;

	// // âm thanh gõ bàn phím
	// var audioTyping = new Audio('/assets/audio/Keyboard-Typing.mp3');
	// audioTyping.play();
	// audioTyping.loop = true;
	// audioTyping.volume = 0.8;

	playerState = state;

	// tự động next bài
	const listAudio = [
		'/assets/audio/Keyboard-Typing.mp3',
		'/assets/audio/UPA6GE2-rain.mp3',
	];
	// khởi tạo khi mở ứng dụng sẽ chơi bản nhạc mặc định

	if (playerState) {
		// ẩn nút play - hiển thị nút pause
		pauseBtn.classList.add('active');
		playBtn.classList.remove('active');
		audioMain.play();
		function audioAutoNext() {
			for (let index = 0; index < listAudio.length; index++) {
				const path = listAudio[index];
				audioMain.src = path;
				audioMain.load();
				audioMain.play();
			}
		}
		audioMain.addEventListener('ended', audioAutoNext);
	} else {
		audioMain.pause();
		// ẩn nút pause - hiển thị nút play
		pauseBtn.classList.remove('active');
		playBtn.classList.add('active');
	}
};

/**
 * Các chức năng cơ bản
 * 1 - Thêm mới công việc
 * 2 - Sửa công việc
 * 3 - Hoàn thành công việc
 * Lưu trữ dữ liệu mỗi ngày trên firebase
 * Nghĩa là: cứ mỗi ngày sẽ tạo 1 document
 */
