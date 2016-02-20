var map = require('../map')
module.exports = {
  sequence: function(arr) {
    return function(done) {
      var i = 0;
      function x(cb, val) {
       if (i === arr.length) {
        done(null, val);
       }
       arr[i++](x, val);
      }

      x(x);
    };
  },
  parallel: function(arr) {
    return function parallel(cb) {
      var result = new Array(arr.length);
      function makeDone(i) {
        return function(err, val) {
          result[i] = val;
          for (var j = 0; j < arr.length; j++) {
            if (!result[j]) {
              return;
            }
          }
          cb(null, result);
        };
      }
      for (var i in arr) {
        arr[i](makeDone(i));
      }
    };
  },
  race: function(arr) {
    return function(cb) {
      var done = false;
      map(arr, f => f(function(err, val) {
          if (!done) {
            done = true;
            cb(null, val);
          }
        }));
    }
  }
};
