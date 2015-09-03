var xor = require('./xor');

module.exports = function (hay, needle, lt) {
  lt = lt || function (a, b) {
    return a < b;
  };

  var len = hay.length;
  var desc = len > 1 && lt(hay[len - 1], hay[0]);

  var i;
  var low = 0;
  var high = len;
  while (low < high) {
    i = low + high >> 1;
    if (xor(desc, lt(hay[i], needle))) {
      low = i + 1;
    } else {
      high = i;
    }
  }
  return desc ? len - high : low;
};

