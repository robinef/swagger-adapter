'use strict';

var url = require('url');


var ZWave = require('./ZWaveService');


module.exports.getLightingSummary = function getLightingSummary (req, res, next) {
  ZWave.getLightingSummary(req.swagger.params, res, next);
};

module.exports.getSwitchState = function getSwitchState (req, res, next) {
  ZWave.getSwitchState(req.swagger.params, res, next);
};

module.exports.setDimmer = function setDimmer (req, res, next) {
  ZWave.setDimmer(req.swagger.params, res, next);
};

module.exports.setDimmerTimer = function setDimmerTimer (req, res, next) {
  ZWave.setDimmerTimer(req.swagger.params, res, next);
};

module.exports.setSwitch = function setSwitch (req, res, next) {
  ZWave.setSwitch(req.swagger.params, res, next);
};

module.exports.setSwitchTimer = function setSwitchTimer (req, res, next) {
  ZWave.setSwitchTimer(req.swagger.params, res, next);
};
