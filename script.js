// ZAD 1
const hello = 'Hello';
const world = 'World';
console.log(`${hello} ${world}`);

// ZAD 2
const multiply = (x, y = 1) => x * y;
console.log(multiply(2,8));

// ZAD 3
const average = (...args) => args.reduce((x, y) => x + y) / args.length;
console.log(average(3, 7, 11));

// ZAD 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// ZAD 5
const strange = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] =  strange;
console.log(`${firstName} ${lastName}`);