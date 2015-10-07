module.exports = function(fun, t) {
  var time = null;
  var timeout = null;
  return function () {
    if (!time || new Date().getTime() > time) {
      // leading-edge call
      time = new Date().getTime() + t;
      return fun.apply(this, arguments);
    } else {
      // trailing-edge call
      var args = arguments;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(function() {
        fun.apply(this, args);
      }.bind(this), t);
    }
  };
};
