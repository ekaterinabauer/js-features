let chat = document.querySelector(".chat-widget");
function chatActive() {
	this.classList.add("chat-widget_active");
}

chat.addEventListener("click", chatActive);

let input = document.getElementById("chat-widget__input");
let messages = document.getElementById("chat-widget__messages");
let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let minutes = ("0"+ min).slice(-2);
let time = `${hours}:${minutes}`;

function sendMessage(event) {

  let robotAnsvers = [
    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
    "Кто тут?",
    "Где ваша совесть?",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
    "Добрый день! До свидания!",
    "Мы ничего не будем вам продавать!"
    ];

  let robotAnsver = robotAnsvers[Math.floor(Math.random()*robotAnsvers.length)];
  
  if(event.charCode == 13 && input.value != ""){
    messages.innerHTML += 
    `<div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">${input.value}</div>
    </div>`;
    input.value = "";

    messages.innerHTML += 
    `<div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">${robotAnsver}</div>
    </div>`;
    
  }
  
}

input.addEventListener("keypress", sendMessage);
