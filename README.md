# count-sorted
Count the number of elements in a sorted collection less than, equal, or greater than the given value.

The collection should be either ascending or non-ascending.

## Example

```javascript
var equal = require('count-sorted/equal');
var less = require('count-sorted/less');
var greater = require('count-sorted/greater');

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

```
