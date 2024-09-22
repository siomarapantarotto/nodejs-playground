
/**
 * Shallow Copy Example
 * A shallow copy only copies the references to the objects inside the array, 
 * so modifying the objects in the shallow copy will also affect the original array.
 */

// Initial array of savings accounts
let savingsAccounts = [
    { number: "001", owner: "Charlie", balance: 1000 },
    { number: "002", owner: "Alice", balance: 2000 },
    { number: "003", owner: "Bob", balance: 3000 }
  ];
   
  // Create a shallow copy using the spread operator
  let shallowCopy = [...savingsAccounts];

  // Display the arrays
  console.log("Initial Array (Before Shallow Copy Modification):", savingsAccounts);
  console.log("Shallow Copy (Before balance modification):", shallowCopy);
  
  // Apply a 2% correction to the balance of the shallow copy
  shallowCopy.forEach(account => {
    account.balance *= 1.02; // Increase balance by 2%
  });
  
  // Display the arrays
  console.log("Initial Array (After Shallow Copy Modification):", savingsAccounts);
  console.log("Shallow Copy (After balance modification):", shallowCopy);