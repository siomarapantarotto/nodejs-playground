// The Global object and the several methods attached to it
// Run on: Terminal>New Terminal>node global

/* Available methods inside Nodejs Global object */ 
console.log(global);

/*
 * Global setTimeout runs once after 3 seconds
 * No need to start with 'global.'
 * global.setTimeout(() => { 
 */
setTimeout(() => {  
    console.log('messaging in the timeout');
    clearInterval(interval) // ends below loop
}, 3000); 

// Global setInterval runs every 1 second
const interval = setInterval(() => {
   console.log('messaging in the interval'); 
}, 1000);

// Returns the absolute path of the current folder that this file is in
console.log(__dirname)

// Returns the absolute path of the folder with the file name at the end
console.log(__filename)

// Returns an error because document is inside 'window', not node global
// console.log(document.querySelector)