module.exports = function binary_search(arr, elem) {
  var i = 0;
  var f = arr.length;

  do {
    var m = parseInt((i + f)/2);
    if (arr[m] == elem) {
      return m;
    }
    if (elem < arr[m]) {
      f = m-1;
    } else {
      i = m+1;
    }
  } while(i <= f);

  return -1;
};
