//const xyz = require('./people')
const { people, ages } = require('./people') // prefer this pattern to import

// Log xyz to console
//console.log('\nInside modules.js file logging xyz:')
//console.log(xyz)      // without export xyx is an empty object
//console.log(people)   // and without export people is not defined - error

//console.log(xyz.thePeople, xyz.theAges)
//console.log(xyz.people, xyz.ages)

console.log('\nInside modules.js file:')
console.log(people,ages)    // names shold match the import

// Operating System built in objects
const os = require('os')    // this is built in to Node itself
console.log(os)             // lists available OS objects 
//console.log(os.platform(), os.homedir())
console.log(os.platform())
console.log(os.homedir())   // home directory of the current computer

/*
Result:
D:\Workspace_NodeJS\nodejs-playground>node modules-and-require/modules
Inside modules.js file:
[ 'Larry', 'Bill', 'James', 'Elon' ] [ 60, 65, 70, 50 ]

{
  arch: [Function: arch] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  availableParallelism: [Function: getAvailableParallelism] {
    [Symbol(Symbol.toPrimitive)]: [Function (anonymous)]
  },
  [...]
  EOL: '\r\n',
  devNull: '\\\\.\\nul'
}

win32
C:\Users\Siomara
*/