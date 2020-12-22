const Product = require('../../database/models/Product')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Delete a product based on the id
  */
  app.get(endpoint + '/:slug', authentication, async (req, res) => {
    if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin' }) }
    try {
      const product = await Product.remove({
        slug: req.params.slug
      })
      res.json(product)
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch product' })
    }
  })
}
