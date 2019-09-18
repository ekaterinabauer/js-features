let reveal = document.querySelectorAll('.reveal');
let arrReveal = Array.from(reveal);

for (let i = 0; i < arrReveal.length; i++) {

	function scrollBlock () {

		const revealTop = arrReveal[i].getBoundingClientRect().top;
		const revealBottom = arrReveal[i].getBoundingClientRect().bottom;
		const viewportHeight = window.innerHeight;

		if (revealTop < viewportHeight && revealBottom > 0) {
			arrReveal[i].classList.add('reveal_active');
		} else if (revealBottom < 0) {
			arrReveal[i].classList.remove('reveal_active');
		} else if (revealTop < viewportHeight) {
			arrReveal[i].classList.add('reveal_active');
		} else if (revealBottom > viewportHeight) {
			arrReveal[i].classList.remove('reveal_active');
		}

	}
document.addEventListener('scroll', scrollBlock);
}