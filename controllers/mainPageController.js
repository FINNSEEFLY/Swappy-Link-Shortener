const {getMainPage} = require("../models/mainPageModel");
module.exports.mainPageController = function (request, response) {
    response.render(...getMainPage());
}