'use strict';

var url = require('url');


var Zones = require('./ZonesService');


module.exports.getZones = function getZones (req, res, next) {
  Zones.getZones(req.swagger.params, res, next);
};

module.exports.quietZone = function quietZone (req, res, next) {
  Zones.quietZone(req.swagger.params, res, next);
};
