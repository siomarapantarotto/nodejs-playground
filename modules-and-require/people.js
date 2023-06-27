// Array of strings with people's names
const people = ['Larry', 'Bill', 'James', 'Elon']
const ages = [60, 65, 70, 50]

// Log those to console
console.log('\nInside people file:')
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

// module.exports = 'hello';   // xyz will be 'hello' at first

//module.exports = people;

//module.exports = {
    //thePeople: people,    // names don't need to match
    //theAges: theAges      // names don't need to match

//}

// using the same name the code is cleaner
module.exports = {people, ages}