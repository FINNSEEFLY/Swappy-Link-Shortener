const {mysql} = require("./mysqlPull");
module.exports.isShortLinkExist = (shortLink) => {
    const request = `SELECT sl_id
                     FROM swappydb.short_link
                     WHERE sl_short_url = ?`
    return mysql.execute(request, [shortLink]).then(result => {
        return result[0];
    }).catch(error => {
        console.log(error);
    });
}