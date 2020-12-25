const Product = require('../../database/models/Product')

module.exports = (app, endpoint) => {
  /**
  * Fetch all the products from the database
  */
  app.get(endpoint, async (req, res) => {
    try {
      const products = await Product.find()
      res.json({
        success: true,
        message: 'fetched all products',
        products
      })
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch product' })
    }
  })
}
