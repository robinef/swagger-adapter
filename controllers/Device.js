'use strict';

var url = require('url');


var Device = require('./DeviceService');


module.exports.getDevices = function getDevices (req, res, next) {
  Device.getDevices(req.swagger.params, res, next);
};

module.exports.register = function register (req, res, next) {
  Device.register(req.swagger.params, res, next);
};
