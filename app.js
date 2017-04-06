const express = require('express')
const app = express()

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use(require('morgan')('dev'));
app.use(require('body-parser').json())
app.use('/', require('./routes'))

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'))
})