const mongoose = require('mongoose')

const MONGOURI = 'mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ':' + process.env.MONGO_INITDB_ROOT_PASSWORD + '@localhost:27017'

const initDb = async () => {
  try {
    await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Connected to the database')
  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports = initDb
