const Product = require('../../database/models/Product')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Delete a product based on the id
  */
  app.delete(endpoint + '/:slug', authentication, async (req, res) => {
    const { slug } = req.params
    if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin' }) }
    if (!slug) { return res.status(400).json({success: false, message: 'you forgot the product slug' })}
    try {
      const product = await Product.deleteOne({
        slug
      })
      res.json({ success: true, message: 'product deleted'})
    } catch (e) {
      console.log(e)
      res.send({ success: false, message: 'couldnt fetch product' })
    }
  })
}
