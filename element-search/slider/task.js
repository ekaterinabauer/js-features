let slide = document.querySelectorAll('.slider__item');
let arrSlide = Array.from(slide);
let slideIndex = 0;
let next = document.querySelector('.slider__arrow_next');
let prev = document.querySelector('.slider__arrow_prev');

function change() {
  for (let i = 0; i < arrSlide.length; i++) { 
      arrSlide[i].classList.remove('slider__item_active');
  }
  arrSlide[slideIndex].classList.add('slider__item_active');
}

function sliderNext() {
    change();
      if(slideIndex + 1 == arrSlide.length) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
}

function sliderPrev() {
    change();
      if(slideIndex - 1 == -1) {
        slideIndex = arrSlide.length-1;
      } else {
        slideIndex--;
      }
}


next.onclick = sliderNext;
prev.onclick = sliderPrev;