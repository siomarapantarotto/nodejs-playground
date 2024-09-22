/**
 * Deep Copy Example
 * A deep copy creates a completely independent copy of both the array and the objects inside it, 
 * so modifying the deep copy won’t affect the original array.
 */

// Initial array of savings accounts
let savingsAccounts = [
    { number: "001", owner: "Charlie", balance: 1000 },
    { number: "002", owner: "Alice", balance: 2000 },
    { number: "003", owner: "Bob", balance: 1500 }
  ];
  
  // Create a deep copy using JSON methods
  let deepCopy = JSON.parse(JSON.stringify(savingsAccounts));

  // Display the arrays
  console.log("Initial Array (Before Deep Copy Modification):", savingsAccounts);
  console.log("Deep Copy (Before Balance Modification):", deepCopy);
  
  // Apply a 2% correction to the balance of the deep copy
  deepCopy.forEach(account => {
    account.balance *= 1.02; // Increase balance by 2%
  });
  
  // Display the arrays
  console.log("Initial Array (After Deep Copy Modification):", savingsAccounts);
  console.log("Deep Copy (After Balance Modification):", deepCopy);
  