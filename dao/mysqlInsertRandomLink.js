const {getDateTimeNow} = require("../utils/datetimeNow");
const {mysql} = require("./mysqlPull");
module.exports.insertRandomLink = (shortLink, longLink) => {
    let dateTimeNow = getDateTimeNow();
    const requestInsertShortLink = "INSERT INTO short_link(sl_short_url, sl_creation_time) VALUES(?,?)";
    const requestInsertLongLink = "INSERT INTO long_link(ll_long_url, ll_creation_time) VALUES (?,?)";
    const requestInsertRoute = "INSERT INTO route(ro_short_url_id,ro_long_url_id) VALUES (?,?)";
    const requestInsertUsersLinks = "INSERT INTO users_links(ul_user_id,ul_short_url_id) VALUES (?,?)";
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