var btnTest = document.getElementById('myBtn');
var myModal = document.getElementById('modal');
var btnClose = document.querySelector('#modal .close');

btnClose.onclick = function (e) {
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
