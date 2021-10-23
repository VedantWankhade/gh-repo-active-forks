let forks = undefined;

// get forks from content script (content_script.js)
chrome.runtime.onMessage.addListener((req, sender, sendRes) => {

    // console.log(req.reqMessage)
    if (req.reqMessage == "get-forks" && forks)  {

        sendRes(forks);
    }
    else if (req.forks) {
        
        // console.log("Background Script: Recieved message from content_script ", sender, " : ", req.forks);
        forks = req.forks;
        sendRes("Message recieved by background service worker script.");
    }
});