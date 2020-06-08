const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  // view engine setups
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {title: 'Nike App Concept | #UntilWeAllWin Ad-Campaign', metaDescription: 'Focused on creating a minimal design to showcase just the necessary information of my Nike App Concept for the 2020 #UntilWeAllWin Ad-Campaign. My goal was to design something quick, easy and effective. Built using Node.js, Express & EJS view engine deployed to Heroku Cloud. Any critiques are very welcome, feel free to share your views, keen to hear your thoughts!'}))
  .listen(PORT, () => console.log('Listening on port 5000!')) // Listen on port 5000!
