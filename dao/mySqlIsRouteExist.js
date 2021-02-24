const {mysql} = require("./mysqlPull");
module.exports.isRouteExist = (shortLinkId, longLinkId) => {
    const request = `SELECT ro_id
                     FROM swappydb.route
                     WHERE ro_short_url_id = ?
                       AND ro_long_url_id = ?`
    return mysql.execute(request, [shortLinkId,longLinkId]).then(result => {
        return result[0];
    }).catch(error => {
        console.log(error);
    });
}