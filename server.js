// Dependencies/Modules
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const stadiums = require('./stadiums');
require('dotenv').config();

const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Express middleware to render static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data.
app.use(express.urlencoded({ extended: true }));

// Home/index page end-point
app.get('/', (req, res) => {
  res.render('pages/index',
    {
      title: "Home", 
      current: "pg-index",
      tagline: "The Soccer Experience"
    });
});

// Gallery end-point
app.get('/gallery', (req, res) => {
  res.render('pages/gallery',
    {
      title: "Gallery", 
      current: "pg-gallery",
      tagline: "Explore our stadiums"
    });
});

// Subscribe end-point
app.get('/subscribe', (req, res) => {
  res.render('pages/subscribe',
    {
      title: "Subscribe", 
      current: "pg-subscribe",
      tagline: "Subscribe Below"
    });
});

// JSON end-point
app.get('/api/v0/gallery', (req, res) => {
  res.json(stadiums);
});

// Do something with form data
app.post('/users', (req, res) => {
  res.send(`<p>Thanks, ${req.body.usersName}! We'll send copies of our newsletters to ${req.body.email}.</p>`);
});

// Return 404 when/if file is not found
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set PORT variable with 3000 fallback if local variable is not found
const PORT = process.env.PORT || 3000;

// Listen on PORT and console.log PORT value
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

