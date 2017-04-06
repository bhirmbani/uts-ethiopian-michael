const express  = require('express')
const app      = express()
const mongoose = require('mongoose')

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use(require('morgan')('dev'));
app.use(require('body-parser').json())
app.use('/', require('./routes'))

// NOTE: run
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'))
})
mongoose.connect('mongodb://localhost:27017/uts-ethiopian-michael')
mongoose.connection.on('connected', () => console.log('MongoDB is connected'))