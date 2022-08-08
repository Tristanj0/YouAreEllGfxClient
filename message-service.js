export default class MessageService {

getAllMessages() {
let request = new XMLHttpRequest();

// Setup our Listener to process completed requests
request.onload = function() {
    if (request.status >= 200 && request.status < 300) {
       console.log(JSON.parse(request.responseText)); // This is the returned text
    } else {
       console.log('Error: ' + request.status);
    }
};

request.open("GET", "http://zipcode.rocks:8085/messages");

request.send();
 }
}