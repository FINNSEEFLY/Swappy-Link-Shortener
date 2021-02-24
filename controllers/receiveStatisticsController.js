const {receiveStatistics} = require("../models/receiveStatisticsModel");
const {getDateTimeNow} = require("../utils/datetimeNow");
const {ClickStatistics} = require("../beans/ClickStatistics");
module.exports.receiveStatistics = (req, res) => {
    let stats = new ClickStatistics(req.body.url_from.replace("/",""), getDateTimeNow(),
                                    req.body.url_referrer, req.body.platform, req.body.screen_width,
                                    req.body.screen_height, req.ip);
    if(!receiveStatistics(stats)) {
        console.log("Something Wrong...")
    }
}