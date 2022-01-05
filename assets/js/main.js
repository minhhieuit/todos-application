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

function go_full_screen(){
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


/**
 * Các chức năng cơ bản
 * 1 - Thêm mới công việc
 * 2 - Sửa công việc
 * 3 - Hoàn thành công việc
 * Lưu trữ dữ liệu mỗi ngày trên firebase 
 * Nghĩa là: cứ mỗi ngày sẽ tạo 1 document
 */