const express = require("express");
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const {receiveStatistics} = require("./controllers/receiveStatisticsController");
const {managedLinkController} = require("./controllers/managedLinkController");
const {randomShortLinkController} = require("./controllers/randomShortLinkController");
const {mainPageController} = require("./controllers/mainPageController");

const app = express();
const jsonParser = express.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "hbs");
app.set("views", "res/views");
hbs.registerPartials(__dirname + "/res/views/partials");
app.engine("hbs", expressHbs(
    {
        layoutsDir: "res/views/patterns",
        defaultLayout: "pattern",
        extname: "hbs"
    }
))

// Static Files Delivery
app.use('/system/styles', express.static(`${__dirname}/res/css`));
app.use('/system/fonts', express.static(`${__dirname}/res/fonts`));
app.use('/system/img', express.static(`${__dirname}/res/img`));
app.use('/system/scripts', express.static(`${__dirname}/res/scripts`));

// Random Link Requests
app.post("/system/randomShortLinkModel", jsonParser, randomShortLinkController)

// Receiving Stats
app.post("/system/sendStatsInfo", jsonParser, receiveStatistics);

// Main Page Controller
app.get("/", mainPageController);

// Managed Links Routing
app.use(managedLinkController);

app.listen(80);

