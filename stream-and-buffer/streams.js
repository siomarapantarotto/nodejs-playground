const fs = require('fs')

//const readStream = fs.createReadStream('./blogs/blog1.txt') // use chunk.toString
const readStream = fs.createReadStream('./blogs/blog1.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./blogs/blog2.txt')

/**
 * .on is an event listener on data
 * a data event (every chunk of data that arrives from the stream)
 */
/* 
readStream.on('data', (chunk) => {
    console.log('\n================= NEW CHUNK =================')
    console.log(chunk)    
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk)
})
 */

// Piping
readStream.pipe(writeStream)