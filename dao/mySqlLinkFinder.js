const {mysql} = require("./mysqlPull");
module.exports.getLongLinkByShortLink = (shortLink) => {
    const request = `SELECT ll_long_url
                     FROM swappydb.long_link
                     WHERE ll_id IN (SELECT ro_long_url_id
                                 FROM swappydb.route
                                 WHERE ro_short_url_id = (SELECT sl_id
                                                       FROM swappydb.short_link
                                                       WHERE sl_short_url = ?))`;
    return mysql.execute(request, [shortLink]).then(result => {
        return result[0];
    }).catch(err => {
        console.log(`mysql ERROR: ${err}`);
    })
}

