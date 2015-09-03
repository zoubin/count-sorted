var test = require('tap').test;
var greater = require('../greater');

test('count-sorted, greater', function(t) {
  t.equal(
    greater([], 1),
    0,
    'empty'
  );
  t.equal(
    greater([1, 1, 2, 2, 3, 3], 3),
    0,
    'zero'
  );
  t.equal(
    greater([1, 1, 2, 2, 3, 3], 2),
    2
  );
  t.equal(
    greater([1, 1, 2, 2, 3, 3], 1),
    4
  );
  t.equal(
    greater([1, 1, 2, 2, 3, 3], 0),
    6
  );
  t.equal(
    greater([3, 3, 2, 2, 1, 1], 0),
    6,
    'descending'
  );
  t.equal(
    greater(['a', 'b', 'c', 'd'], 'c'),
    1,
    'character array'
  );
  t.equal(
    greater('abcd', 'c'),
    1,
    'string'
  );
  t.equal(
    greater([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }], { x: 3 }, function (a, b) {
      return a.x > b.x;
    }),
    1,
    'custom compare'
  );
  t.end();
});

