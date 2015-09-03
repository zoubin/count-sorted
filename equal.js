var less = require('./less');
var greater = require('./greater');

module.exports = function (hay, needle, cmp) {
  cmp = cmp || function (a, b) {
    return a - b;
  };
  var lessCount = less(hay, needle, function (a, b) {
    return cmp(a, b) < 0;
  });
  var greaterCount = greater(hay, needle, function (a, b) {
    return cmp(a, b) > 0;
  });
  return hay.length - lessCount - greaterCount;
};

