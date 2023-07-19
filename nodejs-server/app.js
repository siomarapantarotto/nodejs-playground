/**
 * This app.js file does the same as server.js file but it 
 * implements the server with the express package which makes 
 * the code much more clean, efficient and easy to maintain. 
 */

const express = require('express'); // returns a function that is stored at express

// Express app
const app = express(); // invokes the function stored at express and store into app

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p><h1>Home Page</h1></p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    //res.send('<p><h1>About Page</h1></p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
// The position of this code is important because it is going
// to fire this function if the URL is none of the above ones
// It should be in the very bottom of the code and the status
// needs to be set manually
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
