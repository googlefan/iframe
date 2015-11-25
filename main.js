var element = document.querySelector("#greeting");
element.innerText = "wait message!";

window.addEventListener('message', receiver, false);
function receiver(e) {
  // if (e.origin == 'http://127.0.0.1:61961') {
  element.innerText = e.data;
  e.source.postMessage('Hello', e.origin);
  // }
}