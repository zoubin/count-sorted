var test = require('tap').test;
var equal = require('../equal');

test('equal', function(t) {
  t.equal(
    equal([1, 1], 1),
    2
  );
  t.equal(
    equal([1, 1, 2, 2, 3, 3], 0),
    0
  );
  t.equal(
    equal([1, 1, 2, 2, 3, 3], 2),
    2
  );
  t.end();
});

