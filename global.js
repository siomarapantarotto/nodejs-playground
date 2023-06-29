/**
 * Some few methods attached to Node.js Global object
 * To run choose Terminal / New Terminal on VS Code
 * D:\Workspace_NodeJS\nodejs-playground>node global
 */

// global.console provides access to the console object for
// logging and debugging purposes. It includes methods like
// log(), error(), warn(), etc
console.log(global);

// setTimeout will run once after 3 seconds
setTimeout(() => {  
    console.log('messaging in the timeout');
    clearInterval(interval) // ends below loop
}, 3000); 

// setInterval will run every 1 second
const interval = setInterval(() => {
   console.log('messaging in the interval'); 
}, 1000);

// __dirname is a constant that returns the absolute path of the 
// current folder that this file is in
console.log(__dirname)

// __filename is a constant that returns the absolute path of the
// current folder with this file name at the end
console.log(__filename)

// document.querySelector returns an error because document is inside
// browser 'window', not node 'global'
//console.log(document.querySelector)

/*
Result:
D:\Workspace_NodeJS\nodejs-playground>node global
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 44.93679994344711,
      nodeStart: 3.5708999633789062,
      v8Start: 9.091499984264374,
      bootstrapComplete: 34.7888999581337,
      environment: 19.982499957084656,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1688011668257.958
  },
  fetch: [AsyncFunction: fetch]
}
D:\Workspace_NodeJS\nodejs-playground
D:\Workspace_NodeJS\nodejs-playground\global.js
messaging in the interval
messaging in the interval
messaging in the timeout
*/