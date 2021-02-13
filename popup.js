"use strict";

var checkPageButton = document.getElementById('getNames');
checkPageButton.addEventListener(("click"), function () {
    chrome.tabs.getAllInWindow(null, function (tabs) {
        let linkedTabs = tabs.filter(tab => tab.url.includes("linkedin"));
        let linkedIds = linkedTabs.map(tab => tab.id);
        document.getElementsByTagName("div")[0].innerText = linkedTabs.map(tab => (regSomething(tab.title, /([\w]+\s+[\w]+)/))[0]).join("\n----\n");
        
        chrome.tabs.executeScript(
            linkedIds[0], { file: '/getLinkedIn.js'},
            receiveText
        );
    });
}, false);

function receiveText(resultsArray){
    document.getElementsByTagName("div")[0].innerText += ("receiveText: " + resultsArray[0]);
    console.log("receiveText: " + resultsArray[0].name + ". Status: " + resultsArray[0].status);
    chrome.tabs.getAllInWindow(null, function (tabs) {
        let dynamicsTabs = tabs.filter(tab => tab.url.includes("leapwork-sandbox.crm4.dynamics.com"));
        let dynamicsIds = dynamicsTabs.map(tab => tab.id);
        chrome.tabs.executeScript(
            dynamicsIds[0],
            { code: `var name = "${resultsArray[0].name}";`
            + `var status = "${resultsArray[0].status}";`
        }, function(){
            chrome.tabs.executeScript(
                dynamicsIds[0], {file: '/setDynamics.js'}, printText
            )
        }
            
        );
    });
}

function printText(resultsArray) {
    console.log("printText: " + resultsArray[0]);
}