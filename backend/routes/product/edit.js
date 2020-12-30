const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Edit a project
  */
  app.post(endpoint + '/:slug', authentication, async (req, res) => {

    if (!req.user.admin) { return res.status(401).json({ success: false, message: 'you\'re not an admin' }) }
    const { slug, name, description, price, image } = req.body
    if (!slug || !name || !description || !price || !image) { return res.status(400).json({ success: false, message: 'you forgot one of the following slug, name, description, price, image' }) }
    if(slug === 'new') return res.status(400).json({success: false, message: 'slug cannot be called new'})
    try {
      const product = global.models('product').update({
        slug: req.params.slug
      })

      await product.update({
        slug, name, description, price, image
      })

      res.json(product)
    } catch (e) {
      console.log(e)
      res.status(400).send({ success: false, message: 'couldnt create product' })
    }
  })
}
