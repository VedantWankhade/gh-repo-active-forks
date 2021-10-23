const forksList = document.getElementById('forks-list');

chrome.runtime.sendMessage({ reqMessage: "get-forks" }, (res) => {
    
    console.log("Recieved message from background script: ",res);
});