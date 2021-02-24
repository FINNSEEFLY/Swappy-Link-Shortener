const {getShortLinkId} = require("../dao/mySqlGetShortLinkId");
const {insertRandomLink} = require("../dao/mysqlInsertRandomLink");
const {getRandomString} = require("../utils/stringMaker");
module.exports.getRandomShortLink = async (longUrl) => {
    let randomLink;
    do {
        randomLink = getRandomString(8);
    } while (await getShortLinkId(randomLink).length>0)
    insertRandomLink(randomLink, longUrl)
    return randomLink;
}