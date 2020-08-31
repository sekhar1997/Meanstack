"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("../api/controller/user.controller");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = exports.router = _express2.default.Router();

router.get("/users", _user2.default.findAll);
router.post("/users", _user2.default.create);
//# sourceMappingURL=routes.js.map