const User = require('../../database/models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (app, endpoint) => {
  app.post(endpoint, async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({
        email
      })
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User Not Exist'
        })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: 'Incorrect Password!'
        })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, process.env.JWT, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err
        res.status(200).json({
          token
        })
      }
      )
    } catch (e) {
      console.error(e)
      res.status(500).json({
        success: false,
        message: 'something went wrong logging ing'
      })
    }
  })
}
