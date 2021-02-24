const {getRandomShortLink} = require("../models/randomShortLinkModel");
module.exports.randomShortLinkController = (request, response) => {
    getRandomShortLink(request.body.link).then(result => response.send(result));
}