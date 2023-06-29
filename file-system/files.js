// Import file system fs module built into Node
const fs = require('fs')

// Reading file takes 2 parameters
// 1: relative path to the file
// 2: a function that will fire a callback function after 1 is complete
// Assyncronous - takes some time to read the file
/*
// fs.readFile('./resources/book12.txt', (err, data) => { // test for error caption
fs.readFile('./resources/book1.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString()) // will be printed before the book
})
console.log('last line')
*/

// Writing files takes 3 parameters
// 1: relative path to the file
// 2: new content that will replaces the content of the file
// 3: callback function
// Assyncronous - takes some time to write to the file
/* fs.writeFile('./resources/book1.txt', 'Hello World!', () => {
    console.log('file was written')
})
// Creates the file if it doesn't exist
fs.writeFile('./resources/book2.txt', 'Hello World Again!', () => {
    console.log('file was written')
}) */

// Create and delete directories
if (!fs.existsSync('./modules-and-require/assets')) {
    fs.mkdir('./modules-and-require/assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder assets created')
    })
} else {
    fs.rmdir('./modules-and-require/assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder assets removed')
    })

}

// Deleting files
if(fs.existsSync('./modules-and-require/garbage/delete-me1.txt')) {
    fs.unlink('./modules-and-require/garbage/delete-me1.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}