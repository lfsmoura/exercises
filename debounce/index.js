module.exports = function(fun, time) {
  var timeout;
  
  return function debounced() {
      if (timeout) {
        clearTimeout(timeout);
      }
      var args = arguments;
      timeout = setTimeout(function() { fun.apply(this, args); }.bind(this), time);
  };
};
