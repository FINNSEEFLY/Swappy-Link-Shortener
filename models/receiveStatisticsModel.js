const {insertStats} = require("../dao/mySqlInsertStats");
const {getShortLinkId} = require("../dao/mySqlGetShortLinkId");
module.exports.receiveStatistics = (stats) => {
    return getShortLinkId(stats.shortLink).then(result => {
        if (result.length === 1) {
            stats.shortLinkId = result[0].sl_id;
            return insertStats(stats);
        }
        throw new Error("Short Link Doesnt Exist");
    }).then(result => {
        if (result.insertId!==undefined) {
            return true;
        }
        throw new Error("Insertion Error");
    }).catch(Error => {
        console.log(Error);
    })
}