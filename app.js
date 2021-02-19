const express = require("express");
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const {managedLinkController} = require("./controllers/managedLinkController");
const {randomShortLinkController} = require("./controllers/randomShortLinkController");
const {mainPageController} = require("./controllers/mainPageController");

const app = express();
const jsonParser = express.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "hbs");
/*app.set("views", "views");*/
hbs.registerPartials(__dirname + "/views/partials");
app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/patterns",
        defaultLayout: "pattern",
        extname: "hbs"
    }
))

// Static Files Delivery
app.use('/styles', express.static(`${__dirname}/css`));
app.use('/fonts', express.static(`${__dirname}/fonts`));
app.use('/img', express.static(`${__dirname}/img`));
app.use('/scripts', express.static(`${__dirname}/scripts`));

// Main Page Controller
app.get("/", mainPageController);

// Random Link Requests
app.post("/randomShortLinkModel", jsonParser, randomShortLinkController)

// Managed Links Routing
app.use(managedLinkController);


app.listen(80);

