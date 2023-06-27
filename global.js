// The Global object and the several methods attached to it

////////////////////////////////////////////////////////////
// Available methods inside Nodejs Global objetc
console.log(global);

////////////////////////////////////////////////////////////
// global setTimeout runs once after 3 seconds
// No need to start with 'global.'
//global.setTimeout(() => { 
setTimeout(() => {  
    console.log('messaging in the timeout');
    clearInterval(interval) // ends below loop
}, 3000); 

////////////////////////////////////////////////////////////
// global setInterval runs every 1 second
const interval = setInterval(() => {
   console.log('messaging in the interval'); 
}, 1000);

// To run on terminal: node global