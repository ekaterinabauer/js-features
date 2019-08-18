const clicker = document.getElementById("clicker__counter");
cookie.onclick = function() {
	clicker__counter.textContent++;
	function changeSize() {
		if (cookie.width == 200) {
			cookie.width = 150;
		} else if (cookie.width == 150) {
			cookie.width = 200;
		}
	}
	changeSize ();
}