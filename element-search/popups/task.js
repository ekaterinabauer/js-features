let popup = document.getElementById('modal_main').classList.add('modal_active');
let popupClose = document.querySelectorAll('.modal__close');
let close = Array.from(popupClose); 
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		document.getElementById('modal_main').classList.remove('modal_active');
		document.getElementById('modal_success').classList.remove('modal_active');
	}
}

let showSuccess = document.querySelector('.show-success');


showSuccess.onclick = function() {
	document.getElementById('modal_main').classList.remove('modal_active');
	document.getElementById('modal_success').classList.add('modal_active');
}

