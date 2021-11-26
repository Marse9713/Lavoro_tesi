const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors({ origin:"http://localhost:5500"}));

require("../webapplication/configuration/routes/routes.js")(app);

app.listen(5000); //listen on 5000