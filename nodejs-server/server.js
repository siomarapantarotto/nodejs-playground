/**
 * This file creates a server for http requests on port 3000
 * It doesn't have to be called server.js
 * What you call it is up to you
 */
 
// Request Step #1: require the node module 'http'
const http = require('http')

// Request Step #2: create the server, that can be stored in a
// constant if you want, but there is no need to be stored
// The createServer method takes in a callback function that
// is gonna run every time a request comes in to the server
const server = http.createServer((req, res) => {
    //console.log('request made')
    //console.log(req)
    console.log(req.url, req.method)

    // Response Step #1: set header content type being sent back to the browser
    //res.setHeader('content-Type', 'text/plain')
    res.setHeader('content-Type', 'text/html')
    // Response Step #2: write the content to be sent back to the browser
    //res.write('Hello World!')
    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<p>Hello World!</p>')
    res.write('<p>Hello World Again!</p>')
    // Response Step #3: end the response to send the content to the browser
    res.end()
})

// Request Step #3: invoke the listener passing the port number,
// hostname and a function that fires when the server starts listening
// The default value is localhost but it is explicitly named here 
// localhost points to IP 127.0.0.1 that points back to your computer
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})

/**
 * Run on a browser typing localhost:3000
 * Stop listening typing Crtl+C
 */