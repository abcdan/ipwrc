const User = require('../../database/models/User')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  app.get(endpoint, authentication, async (req, res) => {
    try {
      const orders = await global.models('Order').find({
        userId: req.user.id
      })
      const user = await User.findById(req.user.id)
      res.json({
        success: true,
        message: 'fetched user data',
        user,
        orders
      })
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch user' })
    }
  })
}
