"use strict";

(function() {
    function xpathToArray(xpath) {
        var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        var array = [];
        var iter;
        while (iter = result.iterateNext()) {
            array.push(iter);
        }
        return array;
    }

    var xpathNameSurname = '//*[contains(@class, "ember-view")]/div[2]/div[2]/div[1]/ul[1]/li[1]';
    var xpathStatus = '//*[contains(@class, "ember-view")]/div[2]/div[2]/div[1]/h2';
    console.log("getLinkedIn: " + document);
    return {name:xpathToArray(xpathNameSurname)[0].innerText, status:xpathToArray(xpathStatus)[0].innerText};
})()