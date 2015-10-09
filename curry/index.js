module.exports = function curry(fun) {
  return (function curryfy(fun, args) {
    return function() {
      // converts arguments to an Array
      var givenArgs = Array.prototype.slice.call(arguments);
      if (args.length + arguments.length >= fun.length) {
        return fun.apply(this, args.concat(givenArgs));
      }
      return curryfy(fun, args.concat(givenArgs));
    }
  })(fun, []);
};
