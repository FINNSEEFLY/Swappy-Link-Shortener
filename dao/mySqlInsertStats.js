const {mysql} = require("./mysqlPull");
module.exports.insertStats = (stats) => {
    const request = `INSERT INTO swappydb.stats(s_sl_id, s_date_time, s_url_referrer, s_platform, s_screen_width,
                                                s_screen_height,
                                                s_ip_address)
                     VALUES (?, ?, ?, ?, ?, ?, ?)`
    return mysql.execute(request,
                  [stats.shortLinkId, stats.dateTime, stats.referer, stats.platform,
                         stats.width, stats.height, stats.ip]
                        ).then(result => {
        return result[0];
    }).catch(error => {
        console.log(error);
    });
}