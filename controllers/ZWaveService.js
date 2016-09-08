'use strict';

exports.getLightingSummary = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "zoneStatus" : [ {
    "level" : 123,
    "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "id" : "aeiou"
  } ],
  "zones" : [ {
    "deviceType" : "aeiou",
    "zone" : "aeiou",
    "name" : "aeiou",
    "id" : "aeiou",
    "deviceId" : 123
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSwitchState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "level" : 123,
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "aeiou",
  "id" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setDimmer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  * value (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "everything is ok"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setDimmerTimer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  * value (Integer)
  * timeunit (Integer)
  * units (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "everything is ok"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setSwitch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  * value (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "everything is ok"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setSwitchTimer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deviceId (String)
  * value (String)
  * minutes (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "everything is ok"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

