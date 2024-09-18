/**
 * Title: Managing ATMs using shift() and unshift() methods
 * Description: This script demonstrates how to use the shift() method to remove elements 
 * and unshift() method to add elements to the beginning of a JavaScript array.
 * Author: siomara.com.br
 * Date: September 2024
 */

/**
 * -------------------------------------------------------------------------------------
 * Managing ATMs using shift() and unshift() methods
 * -------------------------------------------------------------------------------------
 */

// Initialize the ATM array
const ATMs = ["ATM1", "ATM2", "ATM3"];
console.log("Initial ATMs:", ATMs);
console.log("Length:", ATMs.length);

/**
 * -------------------------------------------------------------------------------------
 * Adding new ATMs at the beginning using unshift()
 * -------------------------------------------------------------------------------------
 */
console.log("\nAdding new ATMs at the beginning with UNSHIFT method:");
ATMs.unshift("ATM0"); // individual element
console.log("After unshift ATM0:", ATMs);
console.log("Length:", ATMs.length);

ATMs.unshift("ATM-1", "ATM-2"); // multiple elements at once
console.log("After unshift ATM-1 and ATM-2:", ATMs);
console.log("Length:", ATMs.length);

/**
 * -------------------------------------------------------------------------------------
 * Removing ATMs from the beginning using shift()
 * -------------------------------------------------------------------------------------
 */
console.log("\nRemoving ATMs from the beginning with SHIFT method:");
let removedATM = ATMs.shift();
console.log("Removed ATM:", removedATM);
console.log("After shift:", ATMs);
console.log("Length:", ATMs.length);

removedATM = ATMs.shift();
console.log("Removed ATM:", removedATM);
console.log("After shift:", ATMs);
console.log("Length:", ATMs.length);

// Shorter version with no variable (directly in the console.log)
console.log("Removed ATM:", ATMs.shift()); 
console.log("After shift:", ATMs);
console.log("Length:", ATMs.length);