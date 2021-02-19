const express = require("express");
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const {mainPageController} = require("./controllers/mainPageController");

const app = express();
const urlEncParser = bodyParser.urlencoded({extended: false})

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

// Main Page Controller
app.get("/", mainPageController);



app.listen(80);

