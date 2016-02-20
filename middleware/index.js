var Middleware = function() {
  this.go = function(next) {
    next();
  };
};

Middleware.prototype.use = function(fun) {
  var previous = this.go;
  this.go = function(next) {
    previous(function() {
      fun(next);
    });
  };
};

module.exports = Middleware;
