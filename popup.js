"use strict";

var getAnchorButton = document.getElementById('getAnchor');
getAnchorButton.addEventListener(("click"), function (tab) {
    chrome.tabs.executeScript({ file: '/getAnchorLink.js' });
}, false);