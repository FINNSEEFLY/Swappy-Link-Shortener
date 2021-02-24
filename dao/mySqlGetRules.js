const {mysql} = require("./mysqlPull");
module.exports.getRulesForShortLink = (shortLink) => {
    const request = `SELECT r_param, rd_name
                     FROM swappydb.rules,
                          swappydb.rules_definition
                     WHERE (r_short_url_id = (SELECT sl_id FROM swappydb.short_link WHERE sl_short_url = ?))
                       AND (r_is_active = true)
                       AND (rd_id = rules.r_rule_id)`;
    return mysql.execute(request, [shortLink]).then(result => {
        return result[0]
    }).catch(err => {
        console.log(`mysql ERROR: ${err}`);
    })
}