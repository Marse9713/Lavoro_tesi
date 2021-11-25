const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors({ origin:"http://localhost:5500"}));

require("./routes/routes.js")(app);

app.listen(5000);