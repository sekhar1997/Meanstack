"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require("../src/config/routes");

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://localhost/userdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Successfully connected to the database");
}).catch(function (err) {
  console.log("Could not connect to the database. Exiting now...", err);
  process.exit();
});
// mongoose.connect("mongodb://localhost/userdata");

var app = (0, _express2.default)();
var PORT = 3000;

app.use(_express2.default.json());
app.use(_express2.default.urlencoded());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, _morgan2.default)("dev"));
app.use("/api", _routes.router);

app.use(function (req, res, next) {
  var error = new Error("Not found");
  error.status = 404;
  error.message = "Invalid route";
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: { message: error.message }
  });
});
app.listen(PORT, function () {
  console.log("server is running on " + PORT);
});
//# sourceMappingURL=app.js.map