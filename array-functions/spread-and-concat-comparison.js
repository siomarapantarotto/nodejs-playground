/*
The spread operator (...) and the concat() method can both be used to combine 
arrays, but they have some differences in usage and flexibility.
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

/*
Spread Operator:
The spread operator (...) is a more modern and concise way to combine arrays.
It can be used in various contexts, such as function arguments, array literals, and object literals.
*/
const combinedWithSpread = [...array1, ...array2];
console.log(combinedWithSpread); // Output: [1, 2, 3, 4, 5, 6]

/*
Concat Method:
The concat() method is an older method to merge two or more arrays.
It creates a new array by concatenating the elements of the original arrays.
*/
const combinedWithConcat = array1.concat(array2);
console.log(combinedWithConcat); // Output: [1, 2, 3, 4, 5, 6]

/*
Key Differences:

1 - Syntax and Usage:
- The spread operator is more flexible and can be used in various contexts.
- concat() is specifically designed for merging arrays.

2 - Performance:
- The spread operator can be more performant for combining a small number of arrays.
- concat() might be more efficient for combining a large number of arrays.

3 - Mutability:
- Both methods do not mutate the original arrays.
*/