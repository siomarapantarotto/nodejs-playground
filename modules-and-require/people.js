// Array of strings with people's names
const people = ['Larry', 'Bill', 'James', 'Elon']
const ages = [60, 65, 70, 50]

// Log people and ages to console
console.log('\nInside people.js file:')
console.log(people)
console.log(ages)

/* 
Need to export to be required by other files
D:\Workspace_NodeJS\nodejs-playground>node modules-and-require/modules
Inside people.js logging people:
[ 'Larry', 'Bill', 'James', 'Elon' ]
Inside modules.js logging xyz:
hello
*/

//cmodule.exports = 'hello';   // xyz will be 'hello' at first

//module.exports = people;

// Exporting with different names
//module.exports = {
//    thePeople: people,    // names don't need to match
//    theAges: theAges      // names don't need to match
//}

// Exporting with same names
module.exports = {people, ages}

/*
Result:
D:\Workspace_NodeJS\nodejs-playground>node modules-and-require/people 

Inside people.js file:
[ 'Larry', 'Bill', 'James', 'Elon' ]
[ 60, 65, 70, 50 ]
*/