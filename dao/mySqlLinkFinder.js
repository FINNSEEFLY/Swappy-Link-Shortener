const {mysql} = require("./mysqlPull");
module.exports.getLongLink = (shortLink) => {
    const request = `SELECT long_url
                     FROM long_link
                     WHERE id = (SELECT long_url_id
                                 FROM route
                                 WHERE short_url_id = (SELECT id
                                                       FROM short_link
                                                       WHERE short_url = ?))`;
    return mysql.execute(request, [shortLink]).then(result => {
        return result[0].length === 0 ? undefined : result[0][0].long_url;
    }).catch(err => {
        console.log(`mysql ERROR: ${err}`);
    })
}

