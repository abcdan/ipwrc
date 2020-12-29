const mongoose = require('mongoose')

const OrderProductSchema = mongoose.Schema({
  slug: {
    type: String,
    unique: false,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
      type: Number,
      required: true
  }
})

module.exports = OrderProductSchema
