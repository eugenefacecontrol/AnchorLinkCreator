"use strict";

(function () {
    function xpathToArray(xpath) {
        var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        var array = [];
        var iter;
        while (iter = result.iterateNext()) {
            array.push(iter);
        }
        return array;
    }

    function typeText() {
        var keyboardEvent = document.createEvent("KeyboardEvent");
        var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

        keyboardEvent[initMethod](
            "keydown", // event type: keydown, keyup, keypress
            true,      // bubbles
            true,      // cancelable
            window,    // view: should be window
            false,     // ctrlKey
            false,     // altKey
            false,     // shiftKey
            false,     // metaKey
            40,        // keyCode: unsigned long - the virtual key code, else 0
            0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
        );
        document.dispatchEvent(keyboardEvent);
    }

    function clickNode (jNode) {
        triggerMouseEvent(jNode, "mouseover");
        triggerMouseEvent(jNode, "mousedown");
        triggerMouseEvent(jNode, "mouseup");
    }

    function triggerMouseEvent (node, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    function removeListener(listener = "mousedown", element = document){
        var e = getEventListeners(element);
        var func = e[listener][0].listener;
        element.removeEventListener(listener, func);
        e = getEventListeners(element);
        console.log(e["listener"]);
    }

    

    var topicXpath = "(//*[local-name() = 'section'][@id='Contact']//*[local-name() = 'input'][@type='text' and @value='---'])[1]";
    var topic = xpathToArray(topicXpath);
    topic[0].focus();
    document.execCommand('Paste', null, null);
    console.log(topic[0].textContent);
    var nameSurnameArray = name.split(' ');
    var firstNameXpath = "(//*[local-name() = 'section'][@id='Contact']//*[local-name() = 'input'][@type='text' and @value='---'])[2]";
    var firstName = xpathToArray(firstNameXpath);
    firstName[0].value = nameSurnameArray[0];
    firstName[0].title = nameSurnameArray[0];
    var lastNameXpath = "(//*[local-name() = 'section'][@id='Contact']//*[local-name() = 'input'][@type='text' and @value='---'])[3]";
    var lastName = xpathToArray(lastNameXpath);
    lastName[0].value = nameSurnameArray[1];
    lastName[0].title = nameSurnameArray[1];
})()