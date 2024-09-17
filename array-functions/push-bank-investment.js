// Create an empty array to store bank investments
console.log("\n\nCreating an empty array to store bank investments:");
const bankInvestments = [];
console.log(bankInvestments);
console.log("Length:" + bankInvestments.length);

// Add bank investments using the push function
console.log("\n\nAdding 3 elements using the push function:");
bankInvestments.push("Savings Account");
bankInvestments.push("Stocks");
bankInvestments.push("Bonds");
console.log(bankInvestments);
console.log("Length:" + bankInvestments.length);

// Adding a new investment option
console.log("\n\nAdding 1 more element using the push function:");
bankInvestments.push('Real Estate Fund');
console.log(bankInvestments);
console.log("Length:" + bankInvestments.length);

// Pushing multiple elements at once
console.log("\n\nPushing multiple elements at once:");
bankInvestments.push('Mutual Funds', 'ETFs');
console.log(bankInvestments);
console.log("Length:" + bankInvestments.length);

// Pushing elements of different types
console.log("\n\nPushing elements of different types:");
bankInvestments.push(1000, { type: 'Cryptocurrency', name: 'Bitcoin' });
console.log(bankInvestments);
console.log("Length:" + bankInvestments.length);


// Using push with the spread operator to add elements from another array
console.log("\n\nUsing push with the spread operator to add elements from another array:");
const newInvestments = ['Gold', 'Silver'];
bankInvestments.push(...newInvestments);
console.log(bankInvestments);
console.log("Length:" + bankInvestments.length);
