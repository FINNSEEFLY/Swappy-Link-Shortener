module.exports.getMainPage = function () {
    return ["index", {
        title: "Сокращатель Swappy",
        scriptsAfter: ["scripts/getShortLink.js", "scripts/copyToClipboard.js"]
    }];
}