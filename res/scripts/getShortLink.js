let form = document.getElementById("randomShortLinkForm");
let inputForm = form.urlForCut;
let resultInput = form.shortUrl;
document.getElementById("getShortUrl").addEventListener("click", getShortLink)

function getShortLink() {
    if (inputForm.value) {
        sendJsonPost("system/randomShortLinkModel", {link: inputForm.value}).then(result => {
            resultInput.value = `${document.URL}${result}`;
        }, error => {
            console.log(error);
        });
    }
}
