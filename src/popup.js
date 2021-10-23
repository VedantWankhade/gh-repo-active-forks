const forksList = document.getElementById('forks-list');

chrome.runtime.sendMessage({ reqMessage: "get-forks" }, (res) => {
    
    console.log("Recieved message from background script: ", res);

    let forksListHtml = "";

    res.forEach((fork => {
        console.log(fork.html_url, fork.full_name)
        forksListHtml += `<li><a href="${fork.html_url}" target="_blank">${fork.full_name}</a> :  ${fork.stargazers_count}</li>`;
    }));
    // console.log(forksListHtml)
    forksList.innerHTML = forksListHtml;
});