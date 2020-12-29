const mongoose = require('mongoose')
const OrderProductSchema = require('../schemas/OrderProduct')

module.exports = mongoose.model('orderproduct', OrderProductSchema)
