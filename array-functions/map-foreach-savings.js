/**
 * Title: Adjusting Savings Account balances
 * Description: Adjusts savings account balances using forEach() and map() methods
 * Author: siomara.com.br
 * Date: September 2024
 */

//////////////////////////////////////////////////////////////////////////////////////
// CASE 1: Adjusting Savings Account balances using forEach() first, and map() second.
// Shallow Copy: The spread operator (...) creates a new array, but the elements inside 
// the array are still references to the same objects as in the original array.
// Modification: When you modify an object in adjustedAccountsForEach, you are 
// modifying the same object that exists in savingsAccounts.
//

console.log("\nCase 1: Adjusting Savings Account balances using a shallow copy.");

// Initialize the Savings Account array
const savingsAccounts = [
    { number: "001", owner: "Brigite", balance: 1000 },
    { number: "002", owner: "Roberto", balance: 2000 },
    { number: "003", owner: "Charlie", balance: 3000 },
    { number: "004", owner: "Martina", balance: 4000 },
    { number: "005", owner: "Benicio", balance: 5000 },
];

// Initialize correction percentage
const correctionPercentage = 0.2 / 100;

// Display the initial array
console.log("\nInitial Savings Accounts:");
savingsAccounts.forEach(account => {
    console.log(`Number: ${account.number}, Owner: ${account.owner}, Balance: ${account.balance.toFixed(2)}`);
});

/**
 * Adjusting balances using forEach()
 */

// Creates a shallow copy of the initial array using the spread operator (...) 
const adjustedAccountsForEach = [...savingsAccounts];

// The forEach method modifies the balance of each account in adjustedAccountsForEach
// array that will be reflected in the original savingsAccounts array.
adjustedAccountsForEach.forEach(account => {
    account.balance += account.balance * correctionPercentage;
});

// Display the adjusted array using forEach
console.log("\nAdjusted Savings Accounts using forEach():");
adjustedAccountsForEach.forEach(account => {
    console.log(`Number: ${account.number}, Owner: ${account.owner}, Balance: ${account.balance.toFixed(2)}`);
});

/**
 * Adjusting balances using map()
 */

// Since the initial savingsAccounts array was modified by the forEach() method applied 
// above, the map method will be dealing with balance values that have already been 
// adjusted.
const adjustedAccountsMap = savingsAccounts.map(account => {
    return {
        ...account,
        balance: account.balance + account.balance * correctionPercentage
    };
});

// Display the adjusted array using map
console.log("\nAdjusted Savings Accounts using map():");
adjustedAccountsMap.forEach(account => {
    console.log(`Number: ${account.number}, Owner: ${account.owner}, Balance: ${account.balance.toFixed(2)}`);
});


//////////////////////////////////////////////////////////////////////////////////////
// CASE 2: Adjusting Savings Account balances using forEach() first, and map() second.
// A deep copy of the array is created before using the forEach() method to avoid
// changing the original array. The map() method will use the original array to
// adjust the balances. The outuput will be the same for both methods.
//

console.log("\nCase 2: Adjusting Savings Account balances using a deep copy.");

// Initialize the Savings Account array
const savingsAccounts2 = [
    { number: "001", owner: "Brigite", balance: 1000 },
    { number: "002", owner: "Roberto", balance: 2000 },
    { number: "003", owner: "Charlie", balance: 3000 },
    { number: "004", owner: "Martina", balance: 4000 },
    { number: "005", owner: "Benicio", balance: 5000 },
];

// Correction percentage
const correctionPercentage2 = 0.2 / 100;

// Display the initial array
console.log("\nInitial Savings Accounts:");
savingsAccounts2.forEach(account => {
    console.log(`Number: ${account.number}, Owner: ${account.owner}, Balance: ${account.balance.toFixed(2)}`);
});

/**
 * Adjusting balances using forEach()
 */

// Create a deep copy of the array
const adjustedAccountsForEach2 = savingsAccounts2.map(account => ({ ...account }));
adjustedAccountsForEach2.forEach(account => {
    account.balance += account.balance * correctionPercentage2;
});

// Display the adjusted array using forEach
console.log("\nAdjusted Savings Accounts using forEach():");
adjustedAccountsForEach2.forEach(account => {
    console.log(`Number: ${account.number}, Owner: ${account.owner}, Balance: ${account.balance.toFixed(2)}`);
});

/**
 * Adjusting balances using map()
 */

const adjustedAccountsMap2 = savingsAccounts2.map(account => {
    return {
        ...account,
        balance: account.balance + account.balance * correctionPercentage2
    };
});

// Display the adjusted array using map
console.log("\nAdjusted Savings Accounts using map():");
adjustedAccountsMap2.forEach(account => {
    console.log(`Number: ${account.number}, Owner: ${account.owner}, Balance: ${account.balance.toFixed(2)}`);
});