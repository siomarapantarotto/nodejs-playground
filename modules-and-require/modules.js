//const xyz = require('./people')
const { people, ages } = require('./people') // prefer this apttern to import

// Log xyz to console
//console.log('\nInside modules file logging xyz:')
//console.log(xyz)      // without export xyx is an empty object
//console.log(people)   // and without export people is not defined - error

//console.log(xyz.thePeople, xyz.theAges)
//console.log(xyz.people, xyz.ages)

console.log('\nInside modules file:')
console.log(people,ages)    // names shold match the import

// Operating System built in objects
const os = require('os')    // this is built in to Node itself
console.log(os)             // lists available OS objects 
//console.log(os.platform(), os.homedir())
console.log(os.platform())
console.log(os.homedir())   // home directory of the current computer

// To run type node folder-name/file-name as below
// D:\Workspace_NodeJS\nodejs-playground>node modules-and-require/modules