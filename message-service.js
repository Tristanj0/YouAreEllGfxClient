export default class MessageService {

getAllMessages() {
const request = new XMLHttpRequest();

return new Promise(function (resolve, reject) {
// Setup our Listener to process completed requests
request.onload = function() {
    if (request.status >= 200 && request.status < 300) {
       const threads = JSON.parse(request.responseText);
       resolve(threads);
    } else {
       reject({
       status: request.status,
       statusText: request.statusText
       });
    }
};

request.open("GET", "http://zipcode.rocks:8085/messages");

request.send();
  })
}