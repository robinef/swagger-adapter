'use strict';

exports.getZones = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.quietZone = function(args, res, next) {
  /**
   * parameters expected in the args:
  * zoneId (String)
  **/
  // no response value expected for this operation
  res.end();
}

