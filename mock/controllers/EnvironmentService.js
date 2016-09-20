'use strict';

exports.getForecast = function(args, res, next) {
  /**
   * parameters expected in the args:
  * days (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "city" : {
    "country" : "aeiou",
    "name" : "aeiou",
    "lon" : 1.3579000000000001069366817318950779736042022705078125,
    "id" : 123456789,
    "lat" : 1.3579000000000001069366817318950779736042022705078125
  },
  "values" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "temperature" : {
      "high" : 1.3579000000000001069366817318950779736042022705078125,
      "low" : 1.3579000000000001069366817318950779736042022705078125,
      "night" : 1.3579000000000001069366817318950779736042022705078125,
      "evening" : 1.3579000000000001069366817318950779736042022705078125,
      "day" : 1.3579000000000001069366817318950779736042022705078125,
      "morning" : 1.3579000000000001069366817318950779736042022705078125
    },
    "weather" : {
      "summary" : "aeiou",
      "icon" : "aeiou",
      "description" : "aeiou"
    },
    "humidity" : 123,
    "pressure" : 1.3579000000000001069366817318950779736042022705078125,
    "clouds" : 123,
    "windSpeed" : 1.3579000000000001069366817318950779736042022705078125
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

exports.getHeaterState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * zoneId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : "aeiou",
  "state" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getZoneTemperature = function(args, res, next) {
  /**
   * parameters expected in the args:
  * zoneId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : "aeiou",
  "units" : "aeiou",
  "value" : 1.3579000000000001069366817318950779736042022705078125,
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setHeaterState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * zoneId (String)
  * state (String)
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

exports.temperatureSummary = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "zoneStatus" : [ {
    "name" : "aeiou",
    "id" : "aeiou",
    "units" : "aeiou",
    "value" : 1.3579000000000001069366817318950779736042022705078125,
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "zones" : [ {
    "inputPosition" : 123,
    "outputPosition" : 123,
    "zone" : "aeiou",
    "name" : "aeiou",
    "id" : 123
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

