let rotatorCase = document.querySelectorAll('.rotator__case');
let arrRotatorCase = Array.from(rotatorCase);
let rotatorCaseIndex = 0;

function rotator () {
	for (let i = 0; i < arrRotatorCase.length; i++) {
		arrRotatorCase[i].classList.remove('rotator__case_active');
	}
		arrRotatorCase[rotatorCaseIndex].classList.add('rotator__case_active');
		
		if(rotatorCaseIndex + 1 == arrRotatorCase.length) {
        	rotatorCaseIndex = 0;
      	} else {
        	rotatorCaseIndex++;
      	}	
}
setInterval(rotator, 1000);
