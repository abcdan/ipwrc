const Product = require('../../database/models/Product')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Create a new product
  */
  app.post(endpoint, authentication, async (req, res) => {
    if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin' }) }
    const { slug, title, description, price, image } = req.body
    if (!slug || !title || !description || !price || !image) { return res.status(400).json({ success: false, message: 'you forgot one of the following slug, title, description, price, image' }) }
    try {
      const product = new Product({
        slug,
        title,
        description,
        price,
        image
      })

      await product.save()

      res.json(product)
    } catch (e) {
      console.log(e)
      res.send({ success: false, message: 'couldnt create product' })
    }
  })
}
