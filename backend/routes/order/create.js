const Product = require('../../database/models/Product')
const Order = require('../../database/models/order')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Create a new order
  */
  app.post(endpoint, authentication, async (req, res) => {
    const { products } = req.body
    if (!products) { return res.status(400).json({ success: false, message: 'your forgot to give an array of products' }) }
    try {
      const productDocuments = []
      for (let i = 0; i < products.length; i++) {
        const product = await Product.findById(products[i])
        productDocuments.push(await product)
      }
      const order = new Order({
        products: productDocuments,
        userId: req.user.id
      })

      order.save()
      res.json(order)
    } catch (e) {
      console.log(e)
      res.send({ success: false, message: 'couldnt create order' })
    }
  })
}
