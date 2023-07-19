/**
 * This file creates a server for http requests on port 3000
 * It doesn't have to be called server.js
 * What you call it is up to you
 */
 
// Request Step #1: require the node module 'http'
const http = require('http')
const fs = require('fs')
const _ = require('lodash') // It can be called anything (_ or lo, for example)

// Request Step #2: create the server, that can be stored in a
// constant if you want, but there is no need to be stored
// The createServer method takes in a callback function that
// is gonna run every time a request comes in to the server
const server = http.createServer((req, res) => {
    //console.log('request made')
    //console.log(req)
    //console.log(req.url, req.method)

    // lodash
    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() => {
        console.log('hello')
    })

    greet()
    greet()

    // Response Step #1: set header content type being sent back to the browser
    //res.setHeader('content-Type', 'text/plain')
    res.setHeader('content-Type', 'text/html')

    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }
    
    // Response Step #2: write the content to be sent back to the browser
    //res.write('Hello World!')
    // Override original head
    res.write('<head><link rel="stylesheet" href="#"></head>')
    
    // Return HTML code
    //res.write('<p>Hello World!</p>')
    //res.write('<p>Hello World Again!</p>')

    // Return HTML page
    //fs.readFile('./views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            //res.write(data)
            res.end(data)
        }
    })

    // Response Step #3: end the response to send the content to the browser
    //res.end()
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