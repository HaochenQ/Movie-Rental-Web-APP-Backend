const express = require("express");
const winston = require("winston");
const app = express();

require("./starup/logging")();
require("./starup/routes")(app);
require("./starup/db")();
require("./starup/config")();
require("./starup/validation")();

const port = process.env.PORT || 3000;
const Server = app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});
module.exports = Server;
