const {getMainPage} = require("../models/mainPageModel");
module.exports.mainPageController = (request, response) => {
    response.render(...getMainPage());
}