let clicker = document.querySelectorAll('.menu__link');
clicker.onclick = function() {
	for (i = 0; i <= clicker.length; i++) {
		clicker.item(i).classList.add('menu_active');
	}
}