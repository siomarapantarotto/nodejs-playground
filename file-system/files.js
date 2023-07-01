// Import file system module fs built into Node
const fs = require('fs')

/**
 * Reading file takes 2 parameters:
 *  #1: relative path to the file
 *  #2: callback function that will be fired after #1 is complete
 * Reading is assyncronous - takes some time to read the file
 */
 
fs.readFile('./docs/doc1.txt', (err, data) => {
    if (err) {
        // Try a non-existing file for error caption (doc9.txt)
        console.log(err) 
    }
    console.log(data.toString()) 
})
// Assyncronous - will be printed before reading the doc
console.log('last line - logged after reading file - printed before')


/**
 * Writing files takes 3 parameters:
 *  #1: relative path to the file
 *  #2: new content that will replace the content of the file
 *  #3: callback function that will be fired after #2 is complete
 * Writing is assyncronous - takes some time to write to the file
 */

// This will change the entire file content to 'Hello World'
fs.writeFile('./docs/doc1.txt', 'Hello World!', () => {
    console.log('file was written')
})
// This creates the file if it doesn't exist
fs.writeFile('./docs/doc2.txt', 'Hello World Again!', () => {
    console.log('file was written')
}) 


/**
 * Create and delete directories
 * Takes 2 parameters:
 *  #1: relative path to the directory
 *  #2: callback function
 */
 
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder assets created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder assets removed')
    })
}


/**
 * Deleting files
 * Takes 2 parameters:
 *  #1: relative path to the file
 *  #2: callback function
 * Create file delete-me1.txt inside garbage folder before testing
 */

if(fs.existsSync('./garbage/delete-me1.txt')) {
    fs.unlink('./garbage/delete-me1.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}
