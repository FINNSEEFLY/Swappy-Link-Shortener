module.exports.getMainPage = function () {
    return ["index", {
        title: "Сокращатель Swappy",
        scripts: ["system/scripts/sendJsonPost.js"],
        scriptsAfter: ["system/scripts/getShortLink.js", "system/scripts/copyToClipboard.js"],
    }];
}