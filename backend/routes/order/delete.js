const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * Delete an order. I have no idea why you want to do this but it's a thing...
  */
  app.delete(endpoint + '/:orderId', authentication, async (req, res) => {
    try {
      if(!req.user.admin) { return res.status(401).json({ success: false, message: 'you are not an admin. what are you trying to do?'})}
      const product = await global.models('order').findById(req.params.orderId)
      product.deleteOne()
      product.save()
      res.json(await product)
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch order' })
    }
  })
}
