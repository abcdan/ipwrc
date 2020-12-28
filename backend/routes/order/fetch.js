const Product = require('../../database/models/Product')

module.exports = (app, endpoint) => {
  /**
  * Fetch an order based on the id
  */
  app.get(endpoint + '/:orderId', async (req, res) => {
    try {
      const product = await Product.findById(req.params.orderId)
      console.log(product)
      res.json(await product)
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch order' })
    }
  })
}
