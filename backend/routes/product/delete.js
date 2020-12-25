const Product = require('../../database/models/Product')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Delete a product based on the id
  */
  app.delete(endpoint + '/:id', authentication, async (req, res) => {
    if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin' }) }
    try {
      const product = await Product.findById(req.params.id)
      await product.delete()
      res.json(product)
    } catch (e) {
      console.log(e)
      res.send({ success: false, message: 'couldnt fetch product' })
    }
  })
}
