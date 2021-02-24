const {insertStats} = require("../dao/mySqlInsertStats");
const {isRouteExist} = require("../dao/mySqlIsRouteExist");
const {isLongLinkExist} = require("../dao/mySqlIsLongLinkExist");
const {isShortLinkExist} = require("../dao/mySqlIsShortLinkExist");
module.exports.receiveStatistics = (stats) => {
    return isShortLinkExist(stats.shortLink).then(result => {
        if (result.length === 1) {
            stats.shortLinkId = result[0].sl_id;
            return isLongLinkExist(stats.longLink);
        }
        throw new Error("Short Link Doesnt Exist");
    }).then(result => {
        if (result.length === 1) {
            stats.longLinkId = result[0].ll_id;
            return isRouteExist(stats.shortLinkId, stats.longLinkId);
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