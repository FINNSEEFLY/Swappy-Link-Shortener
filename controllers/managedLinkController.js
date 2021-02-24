const {managedLinkModel} = require("../models/managedLinkModel");
module.exports.managedLinkController = (req, res) => {
    managedLinkModel(req.url.replace("/", "")).then(result => {
        if (result.links.length === 1 && result.rules.length === 0) {
            res.render("analyticsContainer", {
                layout: false,
                scripts: ["system/scripts/sendJsonPost.js", "system/scripts/analytics.js"],
                next_link: result.links.pop(),
            })
        } else {
            res.sendStatus(403)
        }
    })
}
