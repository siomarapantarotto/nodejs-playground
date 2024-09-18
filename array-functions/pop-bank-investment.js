
/**
 * Title: Bank Investments 
 * Description: This script demonstrates various ways to manage bank investments
 * using push() and pop() functions in JavaScript arrays.
 * Author: siomara.com.br
 */

// Initialize the bank investments array.
console.log("\n\nCreating an empty array to store bank investments:");
const bankInvestments = [];
console.log(bankInvestments);
console.log("Length: " + bankInvestments.length);

/**
 * -------------------------------------------------------------------------------------
 * Adding bank investments using the push function in different ways:
 * - Individual elements
 * - Multiple elements at once
 * - Elements of different types
 * -------------------------------------------------------------------------------------
 */ 
console.log("\n\nPushing elements in different ways:");
// individual elements
bankInvestments.push("Savings Account");
bankInvestments.push("Stocks");
// multiple elements at once
bankInvestments.push('Bonds', 'Real Estate Fund', 'Mutual Funds', 'ETFs');
// elements of different types
bankInvestments.push(1000, { type: 'Cryptocurrency', name: 'Bitcoin' });
console.log(bankInvestments);
console.log("Length: " + bankInvestments.length);

/**
 * -------------------------------------------------------------------------------------
 * Using pop() to remove the last element and store it in a variable.
 * -------------------------------------------------------------------------------------
 */
console.log("\n\nRemoving the last element using the pop function:");
let removedInvestment = bankInvestments.pop();
console.log("Removed Investment:", removedInvestment);
console.log(bankInvestments);
console.log("Length: " + bankInvestments.length);
// removing another last element and storing it in a variable
console.log("\n\nRemoving another last element using the pop function:");
removedInvestment = bankInvestments.pop();
console.log("Removed Investment:", removedInvestment);
console.log(bankInvestments);
console.log("Length: " + bankInvestments.length);

/**
 * -------------------------------------------------------------------------------------
 * Using pop() in a loop to empty the array.
 * -------------------------------------------------------------------------------------
 */
console.log("\n\nEmptying the array using a loop:");
console.log(bankInvestments);
console.log("Length: " + bankInvestments.length);
while (bankInvestments.length > 0) {
    console.log("Removing Investment:", bankInvestments.pop());
}
console.log(bankInvestments);
console.log("Length: " + bankInvestments.length);


/**
 * -------------------------------------------------------------------------------------
 * Implementing a stack-like behavior (LIFO - Last In, First Out) using pop().
 * -------------------------------------------------------------------------------------
 */
console.log("\n\nImplementing a stack using pop:");
const stack1 = [], stack2 = [];
let poppedElement;
stack1.push('A', 'B', 'C'); // push multiple elements to stack
console.log("stack1: " + stack1 + "\tlength:" + stack1.length);
console.log("stack2: " + stack2 + "\tlength:" + stack2.length);

//step by step: pop from stack1 and push to stack2
poppedElement = stack1.pop();
console.log("\nPopped from stack1: ", poppedElement);
stack2.push(poppedElement);
console.log("Pushed to stack2: ", poppedElement);
console.log("stack1: " + stack1 + "\tlength:" + stack1.length);
console.log("stack2: " + stack2 + "\tlength:" + stack2.length);

//at once: pop from stack1 and push to stack2
console.log("\nPopping/Pushing: ", (poppedElement = stack1.pop(), stack2.push(poppedElement), poppedElement));
console.log("stack1: " + stack1 + "\tlength:" + stack1.length);
console.log("stack2: " + stack2 + "\tlength:" + stack2.length);

console.log("\nPopping/Pushing: ", (poppedElement = stack1.pop(), stack2.push(poppedElement), poppedElement));
console.log("stack1: " + stack1 + "\tlength:" + stack1.length);
console.log("stack2: " + stack2 + "\tlength:" + stack2.length);

// ATTEMPT: pop from stack1 and push to stack2 in a single line.
// console.log("Popping:", stack2.push(stack1.pop())); // will not work as expected
// it will display the length of stack2 after pushing the popped element from stack1.


/**
 * -------------------------------------------------------------------------------------
 * Using pop() with conditionals based on certain criteria.
 * -------------------------------------------------------------------------------------
 */
console.log("\n\nInitializing a new array to use pop with 'IF' conditions:");
const investments = ['Stocks', 'Bonds', 'Real Estate', 'Mutual Funds', 'ETFs'];
console.log(investments);
console.log("Length:" + investments.length);

// remove the last element if it is 'ETFs' (removed)
if (investments[investments.length - 1] === 'ETFs') {
    console.log("\nRemoving Investment:", investments.pop());
}
console.log(investments);
console.log("Length:" + investments.length);

// remove the last element if it is 'Mutual Funds' (removed)
if (investments[investments.length - 1] === 'Mutual Funds') {
    console.log("\nRemoving Investment:", investments.pop());
}
console.log(investments);
console.log("Length:" + investments.length);

// remove the last element if it is 'Real Estate' (removed)
if (investments[investments.length - 1] === 'Real Estate') {
    console.log("\nRemoving Investment:", investments.pop());
}
console.log(investments);
console.log("Length:" + investments.length);

// remove the last element if it is 'Stocks' (nothing removed)
if (investments[investments.length - 1] === 'Stocks') {
    console.log("\nRemoving Investment:", investments.pop());
}
console.log(investments);
console.log("Length:" + investments.length);

// remove the last element if it is 'Cryptocurrency' (nothing removed)
if (investments[investments.length - 1] === 'Cryptocurrency') {
    console.log("\nRemoving Investment:", investments.pop());
}
console.log(investments);
console.log("Length:" + investments.length);

/**
 * -------------------------------------------------------------------------------------
 * Using pop() with switch case criteria.
 * -------------------------------------------------------------------------------------
 */
console.log("\n\nInitializing another new array to use pop with 'SWITCH CASE' conditionals:");
const investments2 = ['Stocks', 'Bonds', 'Real Estate', 'Mutual Funds', 'ETFs'];
console.log(investments2);
console.log("Length:" + investments2.length);

function removeLastInvestment(investments2) {
    const lastInvestment = investments2[investments2.length - 1];
    switch (lastInvestment) {
        case 'ETFs':
        case 'Real Estate':
        case 'Bonds':
        case 'Cryptocurrency':
        case 'Stocks':      
        case 'Mutual Funds':
            console.log("\nRemoving Investment:", investments2.pop());
            break;
        default:
            console.log("\nNo matching investment to remove.");
    }
    console.log(investments2);
    console.log("Length:" + investments2.length);
}

// Call function to remove investments based on the last element
removeLastInvestment(investments2);
removeLastInvestment(investments2);
removeLastInvestment(investments2);
removeLastInvestment(investments2);
removeLastInvestment(investments2);
removeLastInvestment(investments2);
removeLastInvestment(investments2);

