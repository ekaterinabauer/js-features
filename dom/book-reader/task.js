let fontSize = document.querySelectorAll('.font-size');
let book = document.getElementById('book');
let arrFontSize = Array.from(fontSize);
let activeSize = 1;

function fonts (event) {
		event.preventDefault();
		let indexOfSize = arrFontSize.indexOf(event.target);
		arrFontSize[activeSize].classList.remove('font-size_active');
		arrFontSize[indexOfSize].classList.add('font-size_active');
		activeSize = indexOfSize;
		let activeFont = document.querySelector('.font-size_active');
		book.classList.remove('book_fs-big');
		book.classList.remove('book_fs-small');
		if (activeFont.dataset.size == 'big') {
			book.classList.add('book_fs-big');
		} else if (activeFont.dataset.size == 'small') {
			book.classList.add('book_fs-small');
		}
	}

for (i = 0; i < arrFontSize.length; i++) {
	arrFontSize[i].addEventListener('click', fonts);
}