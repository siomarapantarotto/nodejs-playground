/**
 * Title: Managing ATMs with two different approaches
 * Description: Sort and reverse ATM machines using the sort() and reverse() methods.
 * Author: siomara.com.br
 * Date: September 2024
 */

////////////////////////////////////////////////////////////////////////////////////////
// Case 1: ATM machine names follow a standard rule 
// (e.g., "ATM" followed by a sequential number)
// In this case, sort the ATMs is based on the number in the name
//
console.log("Case 1: ATM machine names follow a standard rule");

// Initialize the ATM array with unordered ATM machines
const standardATMs = ["ATM5", "ATM1", "ATM3", "ATM4", "ATM2"];
console.log("Initial unordered ATMs:", standardATMs);

/**
 * Sorting the ATMs in ascending order using sort()
 * This approach is better when ATM machine names follow a standard rule.
 * Internally, sort() converts the ATM names to strings and sorts in lexicographical order.
 */
console.log("\nSorting ATMs in ascending order (based on the number in the name):");
standardATMs.sort((a, b) => {
    const numA = parseInt(a.replace("ATM", ""));
    const numB = parseInt(b.replace("ATM", ""));
    return numA - numB;
});
console.log("Sorted ATMs:", standardATMs);

/**
 * Reversing the order of ATMs using reverse()
 */
console.log("\nReversing the order of ATMs:");
standardATMs.reverse();
console.log("Reversed ATMs:", standardATMs);

////////////////////////////////////////////////////////////////////////////////////////
// Case 2: ATM machine names do not follow a specific naming rule
// (e.g., random names with no specific pattern)
// In this case, sort the ATMs uses lexicographical order
//
console.log("\nCase 2: ATM machine names do not follow a specific naming rule");

// Initialize the ATM array with unordered ATM identifiers
const randomATMs = ["A1B2C3", "Z9Y8X7", "M4N5O6", "B2A1C3", "X7Y8Z9"];
console.log("Initial unordered ATMs:", randomATMs);

/**
 * Sorting the ATMs in lexicographical order using sort()
 * When there is no name rule, sort() follows the ATMs in lexicographical (alphabetical) order.
 */
console.log("\nSorting ATMs in lexicographical order:");
randomATMs.sort();
console.log("Sorted ATMs:", randomATMs);

/**
 * Reversing the order of ATMs using reverse()
 */
console.log("\nReversing the order of ATMs:");
randomATMs.reverse();
console.log("Reversed ATMs:", randomATMs);

////////////////////////////////////////////////////////////////////////////////////////
// Notes: 
// - The sort() method modifies the original array, so it is essential to make a copy if 
//   the original array needs to be preserved.
// - The sort() method itself is not a loop, but it uses a sorting algorithm
//   that may involve loops internally such as quicksort or mergesort.