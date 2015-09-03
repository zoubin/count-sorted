var xor = require('./xor');

module.exports = function (hay, needle, gt) {
  gt = gt || function (a, b) {
    return a > b;
  };

  var len = hay.length;
  var desc = len > 1 && gt(hay[0], hay[len - 1]);

  var i;
  var low = 0;
  var high = len;
  while (low < high) {
    i = low + high >> 1;
    if (xor(desc, gt(hay[i], needle))) {
      high = i;
    } else {
      low = i + 1;
    }
  }
  return desc ? low : len - high;
};

