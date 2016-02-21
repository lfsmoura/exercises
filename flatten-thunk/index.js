module.exports = function flattenThunk(thunk) {
  var makeFlatten = function(cb) {
    return function(err, value) {
      if (value instanceof Function) {
        value(makeFlatten(cb)); 
      } else {
        cb(null, value);   
      }
    };
  };
  return function(cb) {
    return thunk(makeFlatten(cb));
  };
};
