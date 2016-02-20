module.exports = function value(val) {
  if (val instanceof Function) {
    return value(val());
  } else {
    return val;
  }
};
