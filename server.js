const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")
const routes = require("./router")
const port = 3000;
var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")))

routes(app);

app.listen(port, () => {
    console.log("Server is running at 3000")
})
