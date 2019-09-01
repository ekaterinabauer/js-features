let menuSub = document.querySelectorAll('.menu_sub');
let arrMenuSub = Array.from(menuSub);


for (let i = 0; i < arrMenuSub.length; i++) {
  let subClick = arrMenuSub[i].closest('.menu__item');
  subClick.onclick = function () {
      menuSub.item(i).classList.toggle('menu_active');
      return false;
  }
}