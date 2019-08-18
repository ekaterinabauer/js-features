// Задача 1

const time = function(){
const timer = document.getElementById("timer");
timer.textContent -= 1;
if (timer.textContent < 0) {
	clearInterval(time);
	alert('Вы победили в конкурсе!');
}
}

setInterval(time, 1000)