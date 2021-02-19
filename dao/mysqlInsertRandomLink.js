const {getDateTimeNow} = require("../utils/datetimeNow");
const {mysql} = require("./mysqlPull");
module.exports.insertRandomLink = (shortLink, longLink) => {
    let dateTimeNow = getDateTimeNow();
    const requestInsertShortLink = "INSERT INTO short_link(short_url, creation_time) VALUES(?,?)";
    const requestInsertLongLink = "INSERT INTO long_link(long_url, creation_time) VALUES (?,?)";
    const requestInsertRoute = "INSERT INTO route(short_url_id,long_url_id) VALUES (?,?)";
    const requestInsertUsersLinks = "INSERT INTO users_links(user_id,short_url_id) VALUES (?,?)";
    const USER_ID_SWAPPY = 1;
    let shortLinkId;
    let longLinkId;
    return mysql.execute(requestInsertShortLink, [shortLink, dateTimeNow]).then(result => {
        shortLinkId = result[0].insertId;
        return mysql.execute(requestInsertLongLink, [longLink, dateTimeNow]);
    }).then(result => {
        longLinkId = result[0].insertId;
        return mysql.execute(requestInsertRoute, [shortLinkId, longLinkId]);
    }).then(result => {
        mysql.execute(requestInsertUsersLinks, [USER_ID_SWAPPY, shortLinkId]);
    }).catch(error => {
        console.log(error);
    });


}