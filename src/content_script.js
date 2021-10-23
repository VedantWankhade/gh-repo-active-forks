// get repo name (<owner_username>/<repo_name>)
const repo = window.location.href.slice(19);
// console.log(repo)

const getForks = async (repo) => {

    // get forks sorted by stars
    const res = await fetch(`https://api.github.com/repos/${repo}/forks?sort=stargazers`);
    const forks = await res.json();

    // send forks to background script (background.js)
    chrome.runtime.sendMessage({ forks }, (res) => {
        
        console.log(res);
    });
}

getForks(repo);