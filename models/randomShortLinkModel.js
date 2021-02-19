const {insertRandomLink} = require("../dao/mysqlInsertRandomLink");
const {getRandomString} = require("../utils/stringMaker");
const {isShortLinkAvailable} = require("../dao/mySqlCheckShortLink")
module.exports.getRandomShortLink = async (longUrl) => {
    let randomLink;
    let status = false;
    do {
        randomLink = getRandomString(8);
        status = await isShortLinkAvailable(randomLink);
    } while (!status)
    insertRandomLink(randomLink, longUrl);
    return randomLink;
}