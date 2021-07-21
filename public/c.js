'use strict';

// when mouse up, send message to background.js with this position
document.addEventListener('mouseup', function (mousePos) {
  if (mousePos.button == 2) {
    var p = {clientX: mousePos.clientX, clientY: mousePos.clientY};
    var msg = {text: 'example', point: p, from: 'mouseup'};
    chrome.runtime.sendMessage(msg, function(response) {});
  }
})