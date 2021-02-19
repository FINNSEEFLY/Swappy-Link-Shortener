function post(url, requestBody) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener("load", function () {
            if (request.status < 400)
                resolve(request.responseText);
            else
                reject(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            reject(new Error("Network error"));
        });
        request.send(JSON.stringify({link: requestBody}));
    });
}

let form = document.getElementById("randomShortLinkForm");
let inputForm = form.urlForCut;
let resultInput = form.shortUrl;
document.getElementById("getShortUrl").addEventListener("click", getShortLink)

function getShortLink() {
    if (inputForm.value) {
        post("/randomShortLinkModel", inputForm.value).then(result => {
            resultInput.value = result;
        }, error => {
            console.log(error);
        });
    }
}
