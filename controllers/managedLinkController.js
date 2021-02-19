const {managedLinkModel} = require("../models/managedLinkModel");
module.exports.managedLinkController = (req, res) => {
    managedLinkModel(req.url.replace("/", "")).then(result => {
        res.redirect(result);
    })
}