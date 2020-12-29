const mongoose = require('mongoose')
const Product = require('../schemas/Product')

const OrderSchema = mongoose.Schema({
  products: {
    type: [Product],
    required: true,
    ref: 'product'
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
