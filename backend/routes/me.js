const User = require('../database/models/User')
const authentication = require('../middleware/authentication')

module.exports = (app) => {
  app.post('/me', authentication, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      res.json(user)
    } catch (e) {
      res.send({ success: false, message: 'couldnt fetch user' })
    }
  })
}
