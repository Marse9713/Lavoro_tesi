const express = require("express");
const cors = require('cors');
const bp = require('body-parser');

const app = express();
app.use(cors({ origin:"http://localhost:5500"}));

require("./routes/routes.js")(app);

app.listen(5000);