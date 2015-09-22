var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
var hbs = exphbs.create({ defaultLayout: 'main' })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

var server = app.listen(process.env.PORT || 8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
