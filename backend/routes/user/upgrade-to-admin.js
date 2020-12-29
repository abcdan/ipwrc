const User = require('../../database/models/User')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  // TODO: REQUIRED TOKEN
  app.post(endpoint, authentication, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      await user.set({ admin: true })
      await user.save()
      res.json(user)
    } catch (e) {
      console.error(e)
      res.send({ success: false, message: 'couldnt fetch user' })
    }
  })
}