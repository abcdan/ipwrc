const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  /**
  * List all orders
  */
  app.get(endpoint, authentication, async (req, res) => {
    try {
      if(!req.user.admin) { return res.status(401).json({ success: false, message: 'you are not an admin. what are you trying to do?'})}
      const product = await global.models('order').find()
      res.json(await product)
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch order' })
    }
  })
}
