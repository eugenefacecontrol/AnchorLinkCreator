chrome.runtime.onInstalled.addListener(function(){
    // chrome.storage.sync.set({color: '#3aa757', function(){
    //     console.log("The color is green.");
    // }});
    chrome.declarativeContent?.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                // To work everywhere:
                pageUrl: {urlMatches: '.+'},
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
    chrome.commands.onCommand.addListener(function (command) {
        if (command === "Get-AnchorLink") {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript({ file: '/getAnchorLink.js' });
            });
        }
      });
});