require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(bodyParser.json())
require('./database/init')()

fs.readdirSync('./routes/').forEach((file) => {
  const route = './routes/' + file
  require(route)(app)
})
/**
* Assign the right routes to endpoints using the way they are named and located
* in the routes folder
* Credits: https://github.com/abcdan/pify/ (my own project ool)
* @param routePath The folder we have to walk through
* @param prefix The prefix
*/
function processRoutePath (routePath, prefix = '/') {
  fs.readdirSync(routePath).forEach(function (file) {
    const filepath = routePath + '/' + file
    const endpoint = prefix + file.split('.')[0]
    fs.stat(filepath, function (err, stat) {
      if (err) console.error(err)
      if (stat.isDirectory()) {
        processRoutePath(filepath, endpoint + '/')
      } else {
        require(filepath)(app, endpoint)
      }
    })
  })
}

processRoutePath(path.join(__dirname, '/routes'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('[APP] Live @ port ' + port)
})
