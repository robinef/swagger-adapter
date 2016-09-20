'use strict';

exports.getDevices = function(args, res, next) {
  /**
   * parameters expected in the args:
  * skip (Integer)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ "http://10.0.0.225:8080" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.register = function(args, res, next) {
  /**
   * parameters expected in the args:
  * device (DeviceRegistrationInfo)
  **/
  // no response value expected for this operation
  res.end();
}

