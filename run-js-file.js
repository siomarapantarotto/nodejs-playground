/**
 * How to run a javascript file directly on a computer using Nodejs server?
 * Make sure you are in the correct directory where the file exists
 * Choose Terminal/New Terminal on VSCode
 * No need to write the file with extension (run-js-file.js)
 * D:\Workspace_NodeJS\nodejs-playground>node run-js-file
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