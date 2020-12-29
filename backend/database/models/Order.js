const mongoose = require('mongoose')
const OrderProductSchema = require('../schemas/OrderProduct')

const OrderSchema = mongoose.Schema({
  products: {
    type: [OrderProductSchema],
    required: true,
    ref: 'product',
    unique: false
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: false
  },
  delivered: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('order', OrderSchema)
