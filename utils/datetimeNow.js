const moment = require("moment");
module.exports.getDateTimeNow = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}