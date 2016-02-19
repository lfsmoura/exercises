module.exports = function once(fun) {
  
  var called;
  return function() {
    if (!called) {
      called = true;
      fun.apply(this, arguments);
    }
  }
};
