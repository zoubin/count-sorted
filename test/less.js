var test = require('tap').test;
var less = require('../less');

test('count-sorted, less', function(t) {
  t.equal(
    less([], 1),
    0,
    'empty'
  );
  t.equal(
    less([1, 1, 2, 2, 3, 3], 1),
    0,
    'zero'
  );
  t.equal(
    less([1, 1, 2, 2, 3, 3], 2),
    2
  );
  t.equal(
    less([1, 1, 2, 2, 3, 3], 3),
    4
  );
  t.equal(
    less([1, 1, 2, 2, 3, 3], 4),
    6
  );
  t.equal(
    less([3, 3, 2, 2, 1, 1], 4),
    6,
    'descending'
  );
  t.equal(
    less(['a', 'b', 'c', 'd'], 'c'),
    2,
    'character array'
  );
  t.equal(
    less('abcd', 'c'),
    2,
    'string'
  );
  t.equal(
    less([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }], { x: 3 }, function (a, b) {
      return a.x < b.x;
    }),
    2,
    'custom compare'
  );
  t.end();
});

