'use strict';

var url = require('url');


var Environment = require('./EnvironmentService');


module.exports.getForecast = function getForecast (req, res, next) {
  Environment.getForecast(req.swagger.params, res, next);
};

module.exports.getHeaterState = function getHeaterState (req, res, next) {
  Environment.getHeaterState(req.swagger.params, res, next);
};

module.exports.getZoneTemperature = function getZoneTemperature (req, res, next) {
  Environment.getZoneTemperature(req.swagger.params, res, next);
};

module.exports.setHeaterState = function setHeaterState (req, res, next) {
  Environment.setHeaterState(req.swagger.params, res, next);
};

module.exports.temperatureSummary = function temperatureSummary (req, res, next) {
  Environment.temperatureSummary(req.swagger.params, res, next);
};
