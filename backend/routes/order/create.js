const authentication = require('../../middleware/authentication')
const mongoose = require('mongoose')
const OrderProduct = mongoose.model('orderproduct') 

module.exports = (app, endpoint) => {
  /**
  * Create a new order
  */
  app.post(endpoint, authentication, async (req, res) => {
    const { products } = req.body
    if(products.length === 0) return res.status(400).json({ success: false, message: 'your forgot to give an array of products with id/amount' })
    if (!products || !products.length === 0) { return res.status(400).json({ success: false, message: 'your forgot to give an array of products with id/amount' }) }
    try {
      const productDocuments = []
      for (let i = 0; i < products.length; i++) {
        const product = await global.models('Order').findOne({
          slug: products[i].slug
        })
        const orderProduct = new OrderProduct({
          slug: product.slug,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          amount: products[i].amount
        })
        productDocuments.push(orderProduct)
      }
      const order = await new global.models('Order')({
        products: productDocuments,
        userId: req.user.id
      })

      await order.save().catch(e =>{
        console.log(e)
        return res.send({ success: false, message: 'couldnt create order' })
      })
      res.json(await order)
    } catch (e) {
      console.log(e)
      return res.send({ success: false, message: 'couldnt create order' })
    }
  })
}
