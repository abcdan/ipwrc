require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const path = require('path')
const cors = require('cors')

var whitelist = ['https://ipwrc.lngzl.nl', 'http://localhost:4200', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use('/uploads', express.static('uploads'))
require('./database/init')()

global.models = require('./database/models')
// global.models('OrderProduct')

/**
* Assign the right routes to endpoints using the way they are named and located
* in the routes folder
* Credits: https://github.com/abcdan/pify/ (my own project lol)
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
