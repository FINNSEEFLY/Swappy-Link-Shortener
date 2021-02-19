const {getLongLink} = require("../dao/mySqlLinkFinder");
module.exports.managedLinkModel = (link) => {
    return getLongLink(link).then(result => {
        return result!==undefined ? result : "/";
    });
}