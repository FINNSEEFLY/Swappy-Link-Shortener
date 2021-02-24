const {mysql} = require("./mysqlPull");
const request = "SELECT sl_id FROM short_link WHERE sl_short_url=?";
module.exports.isShortLinkAvailable = function (link) {
    return mysql.execute(request, [link]).then(result => {
        return result[0].length === 0;
    }).catch(error => {
        throw error;
    })
}