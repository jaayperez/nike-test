// Express
const express = require('express')
const sassMiddleware = require('node-sass-middleware')
// Add the sassMiddleware module
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

// Add the sass middleware
app.use(sassMiddleware({
  src: __dirname + '/public/sass', // Input Sass
  dest: __dirname + '/public/css', // Output CSS
  debug: true,
  outputStyle: 'compressed'
}));

express()
  .use(express.static(path.join(__dirname, 'public'))) // Serve static
  .set('views', path.join(__dirname, 'views')) // Setup view engine
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {title: 'Nike App Concept | #UntilWeAllWin Ad-Campaign', metaDescription: 'Focused on creating a minimal design to showcase just the necessary information of my Nike App Concept for the 2020 #UntilWeAllWin Ad-Campaign. My goal was to design something quick, easy and effective. Built using Node.js, Express & EJS view engine deployed to Heroku Cloud. Any critiques are very welcome, feel free to share your views, keen to hear your thoughts!'}))
  .listen(PORT, () => console.log('Listening on port 5000!')) // Listen on port 5000!
