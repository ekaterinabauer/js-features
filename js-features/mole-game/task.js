let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function getHole(index) {
	let hole = document.getElementById(`hole${index}`);	
	return hole;
}

for (let index = 1; index < 9; index++) {
	getHole(index);
	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole") === true) {
			dead++;
		} else {
			lost++;
		}

		if (dead.textContent === 10) {
			alert ("Вы победили!");
			dead = 0;
			lost = 0;
		} else if (lost.textContent === 5) {
			alert ("Вы проиграли");
			dead = 0;
			lost = 0;
			}
	}
}