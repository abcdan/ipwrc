const Product = require('../../database/models/Product')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Create a new product
  */
  app.post(endpoint, authentication, async (req, res) => {
    if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin' }) }
    const { slug, name, description, price, image } = req.body
    if (!slug || !name || !description || !price || !image) { return res.status(400).json({ success: false, message: 'you forgot one of the following slug, name, description, price, image' }) }
    if(slug === 'new') return res.status(400).json({success: false, message: 'slug cannot be called new'})

    const productRegex = /^\w+$/;
    if(!productRegex.test(slug)) return res.status(400).json({ success: false, message: 'slug can only be letters/numbers/underscores'})
    const slugLowerCase = slug.toLowerCase()

    try {
      const findProduct = await Product.find({
        slug: slugLowerCase
      })

      if(findProduct.length > 0) {
        return res.status(400).json({success: false, message: 'item already exists'})
      }

      const product = new Product({
        slug: slugLowerCase,
        name,
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
