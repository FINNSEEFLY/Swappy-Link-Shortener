class ClickStatistics {
    shortLink;
    shortLinkId;
    dateTime;
    referer;
    platform;
    width;
    height;
    ip;

    constructor(shortUrl, dateTime, referer, platform, width, height, ip) {
        this.shortLink = shortUrl;
        this.dateTime = dateTime;
        this.referer = referer;
        this.platform = platform;
        this.width = width;
        this.height = height;
        this.ip = ip;
    }
}
module.exports.ClickStatistics = ClickStatistics;