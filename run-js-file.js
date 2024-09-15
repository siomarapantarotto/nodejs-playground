/**
 * How to run a JavaScript file directly on a computer using Node.js?
 * 
 * 1. Make sure you are in the correct directory where the file exists.
 * 2. Open the terminal in VSCode (choose Terminal -> New Terminal).
 * 3. Use the following command to run the file:
 *    D:\Workspace_NodeJS\nodejs-playground>node run-js-file.js
 * 
 * Notes:
 * - You must prefix the command with 'node' to tell the terminal to execute the JavaScript file using Node.js.
 * - You can omit the `.js` extension (e.g., node run-js-file) if desired.
 */


// Define variables
const firstName = 'Siomara'
console.log(firstName)

const countryName = 'Brazil'
console.log(countryName)

// Define method
const greet = (firstName, countryName) => {
    // Use ` and not ' or "
    console.log(`Hello! I am ${firstName}, a DEV from ${countryName}!`);
}

// Use method
greet(firstName, countryName);
greet('Maria', 'Mexico');
greet('Luigi', 'Italy');

/*
Result:
Siomara
Brazil
Hello! I am Siomara, a DEV from Brazil!
Hello! I am Maria, a DEV from Mexico!
Hello! I am Luigi, a DEV from Italy!
*/