const {Rule} = require("../beans/Rule");
const {FullLinkInfo} = require("../beans/FullLinkInfo");
const {getRulesForShortLink} = require("../dao/mySqlGetRules");
const {getLongLink} = require("../dao/mySqlLinkFinder");
module.exports.managedLinkModel = (link) => {
    return getLongLink(link).then(result => {
        let resObj = new FullLinkInfo();
        if (result.length === 0) {
            resObj.links.push('/');
            return resObj
        }
        for (let link of result) {
            resObj.links.push(link.ll_long_url);
        }

        return getRulesForShortLink(link).then(result => {
            for (let item of result) {
                resObj.rules.push(new Rule(item.rd_name, item.r_param));
            }
            return resObj;
        })
    })
}