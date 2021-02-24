const {insertStats} = require("../dao/mySqlInsertStats");
const {getRoutIdByShortLinkAndLongLink} = require("../dao/mySqlIsRouteExist");
const {getLongLinkId} = require("../dao/mySqlGetLongLinkId");
const {getShortLinkId} = require("../dao/mySqlGetShortLinkId");
module.exports.receiveStatistics = (stats) => {
    return getShortLinkId(stats.shortLink).then(result => {
        if (result.length === 1) {
            stats.shortLinkId = result[0].sl_id;
            return getLongLinkId(stats.longLink);
        }
        throw new Error("Short Link Doesnt Exist");
    }).then(result => {
        if (result.length === 1) {
            stats.longLinkId = result[0].ll_id;
            return getRoutIdByShortLinkAndLongLink(stats.shortLinkId, stats.longLinkId);
        }
        throw new Error("Long Link Doesnt Exist");
    }).then(result => {
        if (result.length === 1) {
            stats.routeId = result[0].ro_id;
            return insertStats(stats);
        }
        throw new Error("Route Doesnt Exist");
    }).then(result=> {
        if (result.insertId!==undefined) {
            return true;
        }
        throw new Error("Insertion Error");
    }).catch(Error => {
        console.log(Error);
    })
}