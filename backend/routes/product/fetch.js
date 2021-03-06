const Product = require('../../database/models/Product')

module.exports = (app, endpoint) => {
  /**
  * Fetch a product based on the id
  */
  app.get(endpoint + '/:slug', async (req, res) => {
    try {
      const product = await Product.find({
        slug: req.params.slug
      }).catch(e => {
        res.send({ success: false, message: 'couldnt fetch product' })

      })
      res.json(product[0])
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch product' })
    }
  })
}
