let outputInput = document.getElementById("outputUrl");
let copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", copyToClipboard)

function copyToClipboard() {
    let value = outputInput.value;
    if (value) {
        navigator.clipboard.writeText(`${value}`)
            .then(() => {
                // Nothing
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }
}
