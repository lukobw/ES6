'use strict';

// ZAD 1
var hello = 'Hello';
var world = 'World';
console.log(hello + ' ' + world);

// ZAD 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log(multiply(2, 8));

// ZAD 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (x, y) {
    return x + y;
  }) / args.length;
};
console.log(average(3, 7, 11));

// ZAD 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// ZAD 5
var strange = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = strange[2],
    lastName = strange[4];

console.log(firstName + ' ' + lastName);
