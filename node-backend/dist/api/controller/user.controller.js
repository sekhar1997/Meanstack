"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _users = require("../models/users.model");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [{ name: "Shyam", email: "shyamjaiswal@gmail.com" }, { name: "Bob", email: "bob32@gmail.com" }, { name: "Jai", email: "jai87@gmail.com" }];

exports.default = {
  findAll: function findAll(req, res, next) {
    res.json(users);
  },
  create: function create(req, res) {
    console.log(req.body);
    var schema = _joi2.default.object().keys({
      name: _joi2.default.string().required(),
      email: _joi2.default.string().required(),
      phone: _joi2.default.number().optional()
    });

    var _Joi$validate = _joi2.default.validate(req.body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return res.json(error);
    }
    _users2.default.create(value).then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return res.status(500).json(err);
    });
  }
};
//# sourceMappingURL=user.controller.js.map