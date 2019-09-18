let fontSize = document.querySelectorAll('.font-size');
let book = document.getElementById('book');
let arrFontSize = Array.from(fontSize);
let activeSize = 1;

for (i = 0; i < arrFontSize.length; i++) {
	function fonts (event) {
		event.preventDefault();
		let indexOfSize = arrFontSize.indexOf(event.target);
		arrFontSize[activeSize].classList.remove('font-size_active');
		arrFontSize[indexOfSize].classList.add('font-size_active');
		activeSize = indexOfSize;
		let activeFont = document.querySelector('.font-size_active');
		if (activeFont.classList.contains('font-size_small')) {
			book.classList.remove('book_fs-big');
			book.classList.add('book_fs-small');
		} else if (activeFont.classList.contains('font-size_big')) {
			book.classList.remove('book_fs-small');
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	}
	arrFontSize[i].addEventListener('click', fonts);
}