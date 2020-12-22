const User = require('../../database/models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (app, endpoint) => {
  app.post(endpoint, async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) { return res.status(400).json({ success: false, message: 'you forgot `username`, `email` or`password ' }) }
    try {
      let user = await User.findOne({
        email
      })
      if (user) { return res.status(400).json({ success: false, message: 'User exists already' }) }

      user = new User({
        username,
        email,
        password
      })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, process.env.JWT, { expiresIn: 10000 }, (err, token) => {
        if (err) throw err
        res.status(200).json({
          success: true,
          message: 'created account',
          token
        })
      }
      )
    } catch (err) {
      console.log(err.message)
      res.status(500).json({
        success: false,
        message: 'couldn\'t create account'
      })
    }
  })
}
