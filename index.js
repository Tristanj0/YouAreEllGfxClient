import MessageService from "./message-service.js";

let currentUser = "Tristanj0";
const messageService = new MessageService(currentUser);

window.addEventListener("load", function() {
  document.getElementById("greeting").innerHTML = `Welcome ${currentUser}!`;
  messageService.getAllMessages();
});