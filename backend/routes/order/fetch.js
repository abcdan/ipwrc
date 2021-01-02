const authentication = require("../../middleware/authentication")

module.exports = (app, endpoint) => {
  /**
  * Fetch an order based on the id
  */
  app.get(endpoint + '/:orderId', authentication, async (req, res) => {
    try {
      const order = await global.models('Order').findById(req.params.orderId)
      console.log(req.user.id)
      console.log(req.userId)
      console.log(req.user.admin)
      if(req.user.id !== order.userId && !req.user.admin) return res.status(401).json({success: false, message: 'thats not your order'})

      res.json(await order)
    } catch (e) {
      res.status(400).json({ success: false, message: 'couldnt fetch order' })
    }
  })
}
