let dropdownValue = document.querySelectorAll('.dropdown__value');
let arrDropdownValue = Array.from(dropdownValue);
let dropdownList = document.querySelectorAll('.dropdown__list');
let arrDropdownList = Array.from(dropdownList);
let dropdownItem = document.querySelectorAll('.dropdown__item');
let arrDropdownItem = Array.from(dropdownItem);

for (let i = 0; i < arrDropdownValue.length; i++) {
 function listOpen () {
   arrDropdownList[i].classList.toggle('dropdown__list_active');
 }
  arrDropdownValue[i].addEventListener('click', listOpen);
}

for (i = 0; i < arrDropdownItem.length; i++) {
  function listClose (event) {
    for (let j = 0; j < arrDropdownValue.length; j++ ) {
      dropdownValue.item(j).textContent = this.textContent;
      arrDropdownList[j].classList.remove('dropdown__list_active');
      event.preventDefault();
    }
  }
  arrDropdownItem[i].addEventListener('click', listClose);
}