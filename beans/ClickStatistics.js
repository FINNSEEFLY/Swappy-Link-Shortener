class ClickStatistics {
    shortLink;
    shortLinkId;
    longLink;
    longLinkId;
    routeId;
    dateTime;
    referer;
    platform;
    width;
    height;
    ip;

    constructor(shortUrl, longUrl, dateTime, referer, platform, width, height, ip) {
        this.shortLink = shortUrl;
        this.longLink = longUrl;
        this.dateTime = dateTime;
        this.referer = referer;
        this.platform = platform;
        this.width = width;
        this.height = height;
        this.ip = ip;
    }
}
module.exports.ClickStatistics = ClickStatistics;