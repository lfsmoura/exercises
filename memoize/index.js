module.exports = function memoize(fun){
  
  var memo = {};
  return function() {
    var memoCell = memo;
    for (var i = 0; i < arguments.length; i++) {
      memoCell = memoCell[arguments[i]] = memoCell[arguments[i]] || {};
    }
    if (!memoCell._value) {
      memoCell._value = fun.apply(this, arguments);
    }
    return memoCell._value;
  }
}
