const express = require('express')
const path = require('path')
// const nocache = require('nocache');

const PORT = process.env.PORT || 5001



express()
  .use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
  })
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
