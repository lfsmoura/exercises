module.exports = function flatten(arr) {
  var q = [];
  
  for (var i in arr) {
    if (arr[i] instanceof Array) {
      q = q.concat(flatten(arr[i]));
    } else {
      q.push(arr[i]);
    }
  }

  return q;
};
