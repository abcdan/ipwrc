require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')

app.use(bodyParser.json())
require('./database/init')()

fs.readdirSync('./routes/').forEach((file) => {
  const route = './routes/' + file
  require(route)(app)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('[APP] Live @ port ' + port)
})
