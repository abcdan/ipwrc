const mongoose = require('mongoose')

const OrderProductSchema = mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  amount: {
      type: Number,
      required: false
  }
})

module.exports = OrderProductSchema
