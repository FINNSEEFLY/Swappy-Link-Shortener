const {mysql} = require("./mysqlPull");
module.exports.isLongLinkExist = (longLink) => {
    const request = `SELECT ll_id
                     FROM swappydb.long_link
                     WHERE ll_long_url = ?`
    return mysql.execute(request, [longLink]).then(result => {
        return result[0];
    }).catch(error => {
        console.log(error);
    });
}