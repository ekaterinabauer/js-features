let tab = document.querySelectorAll('.tab');
let arrTab = Array.from(tab);
let activeTab = 0;
let tabContent = document.querySelectorAll('.tab__content');
let arrTabContent = Array.from(tabContent);


for (let i = 0; i < arrTab.length; i++) {
	function tabActive (event) {
      arrTab[i].classList.add('tab_active');
      arrTab[activeTab].classList.remove('tab_active');
      arrTabContent[i].classList.add('tab__content_active');
      arrTabContent[activeTab].classList.remove('tab__content_active');
      activeTab = arrTab.indexOf(event.target);
           
    }
  arrTab[i].addEventListener('click', tabActive);
}
