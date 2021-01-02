const mongoose = require('mongoose')
const OrderProductSchema = require('../schemas/OrderProductClone')

module.exports = mongoose.model('orderproduct', OrderProductSchema)
