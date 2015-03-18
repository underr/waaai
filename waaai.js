var Q = require('q');
var needle = require('needle');

var createLink = function(params, callback) {
   var deferred = Q.defer();
   // Defaults to no custom and no private
   if (!params.custom) {
     params.custom = '';
   } else if (!params.private) {
     params.private = false;
   }
   needle.post('http://api.waa.ai/shorten', params, function(err, response) {
    if (!err) {
      var link = response.body.data.url;
      deferred.resolve(link);
    } else {
      return false;
    }
  });
  deferred.promise.nodeify(callback);
  return deferred.promise;
}

var getInfo = function(code, callback) {
  var deferred = Q.defer();
  needle.get('http://api.waa.ai/info/' + code, function(err, response) {
    if (!err) {
      var info = response.body.data;
      deferred.resolve(info);
    }
  });
  deferred.promise.nodeify(callback);
  return deferred.promise;
}

module.exports.link = createLink;
module.exports.info = getInfo;
