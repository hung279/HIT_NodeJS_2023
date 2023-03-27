const express = require('express')
const path = require('path');
const app = express()
const port = 3000
const router = require('./router/router');
//compile view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// console.log(path.join(__dirname, 'views'));


app.use('/views', router);

// app -> "/view" -> router -> 

// app.get('/views', (req, res) => {
//   res.render('index.ejs');
// })
// app.get('/views/index2', (req, res) => {
//   res.render('index2.ejs');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})