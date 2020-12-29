const mongoose = require('mongoose')
const ProductSchema = require('../schemas/Product')

module.exports = mongoose.model('product', ProductSchema)
