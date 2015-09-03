var equal = require('../equal');
var less = require('../less');
var greater = require('../greater');

console.log(
  equal([1, 1, 2, 2, 3, 3], 2)  // 2
);

console.log(
  less([1, 1, 2, 2, 3, 3], 2)  // 2
);

console.log(
  greater([1, 1, 2, 2, 3, 3], 2)  // 2
);

console.log(
  equal(
    [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
    { x: 2 },
    function (a, b) {
      return a.x - b.x;
    }
  )
  // 2
);

console.log(
  less(
    [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
    { x: 2 },
    function (a, b) {
      return a.x < b.x;
    }
  )
  // 2
);

console.log(
  greater(
    [{ x: 1 }, { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 3 }],
    { x: 2 },
    function (a, b) {
      return a.x > b.x;
    }
  )
  // 2
);

