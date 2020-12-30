const User = require('../../database/models/User')
const authentication = require('../../middleware/authentication')

module.exports = (app, endpoint) => {
  app.get(endpoint, authentication, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      res.json({
        success: true,
        message: 'fetched user data',
        admin: user.admin,
        
      })
    } catch (e) {
      res.status(401).send({ success: false, message: 'not correct' })
    }
  })
}
