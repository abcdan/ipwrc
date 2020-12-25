const mongoose = require('mongoose')
const Product = require('./Product')

const OrderSchema = mongoose.Schema({
  product: {
    type: [Product],
    unique: true,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('order', OrderSchema)
