const {mysql} = require("./mysqlPull");
const request = "SELECT id FROM short_link WHERE short_url=?";
module.exports.isShortLinkAvailable = async function (link) {
    return mysql.execute(request, [link]).then(result => {
        return result[0].length === 0;
    }).catch(error => {
        throw error;
    })
}