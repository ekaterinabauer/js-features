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
    <div class="message__text">Добрый день!</div>
    </div>`;
    
  }
}

input.addEventListener("keypress", sendMessage);
