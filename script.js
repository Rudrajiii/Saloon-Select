const express = require('express');
const data = require('./script2');
console.log(data.first,data.second);
const app = express()
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.get('/', function (req, res) {
    res.render('index')
  })
app.get('/home', (req, res) =>{
  res.render("view");
  // throw Error("Pata ni Bhai");
})
app.get('/contact/:userName', function (req, res) {
  res.send(`Contact Number of ${req.params.userName}`);
})
app.get('/error', function (req, res,next) {
  throw Error("Pata ni Bhai");
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
app.listen(8000);

