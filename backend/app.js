const express = require('express')
const app = express()
const fs = require('fs')

fs.readdirSync('./routes/').forEach((file) => {
  const route = './routes/' + file
  require(route)(app)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('[APP] Live @ port ' + port)
})
