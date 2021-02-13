"use strict";

(function () {
    let selectedText = window.getSelection().toString();
    let url = document.URL;
    if (url[url.length - 1] == "/") {
        url = url.substring(0, url.length - 1);
    }
    const anchorTag = "#:~:text=";
    let resultUrl = (`${url}/${anchorTag}${selectedText}`);
    let formattedUrl = resultUrl.replace(/\s/g, "%20")
    prompt("Your links is:", formattedUrl);
})()