"use strict";

(function () {
    function copySomething(textToCopy, element = document) {
        const el = element.createElement('textarea');
        el.value = textToCopy;
        element.body.appendChild(el);
        el.select();
        var isCopied = element.execCommand('copy');
        element.body.removeChild(el);
        if (isCopied) {
            alert("Copied: " + textToCopy);
        } else {
            alert("Error while copy");
        }
    }

    function getCodes() {
        return {
            "%": "%25",
            " ": "%20",
            "!": "%21",
            "\"": "%22",
            "#": "%23",
            "$": "%24",
            "&": "%26",
            "'": "%27",
            "(": "%28",
            ")": "%29"
        }
    }

    let selectedText = window.getSelection().toString();
    let url = document.URL;
    if (url[url.length - 1] == "/") {
        url = url.substring(0, url.length - 1);
    }
    const anchorTag = "#:~:text=";
    let codes = getCodes();
    let keys = Object.keys(codes);
    keys.forEach(x => selectedText = selectedText.replaceAll(x, codes[x]))
    let resultUrl = (`${url}/${anchorTag}${selectedText}`);
    let formattedUrl = resultUrl.replace(/\s/g, "%20").replace(/'/g, "%27");
    copySomething(formattedUrl);
    // prompt("Your links is:", formattedUrl);
})()