const User = require('../../database/models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (app, endpoint) => {
  app.post(endpoint, async (req, res) => {
    const { username, email, password, firstName, city, lastName, street, streetNumber, postalCode, country } = req.body
    if (!username || !email || !password || !firstName || !lastName ||  !street || !city || !streetNumber || !postalCode || !country) { return res.status(400).json({ success: false, message: 'you forgot `username`, `email`, `city` or`password or something from firstName, lastName, street, streetNumber, postalCode, country' }) }
    try {
      let user = await User.findOne({
        email
      })
      if (user) { return res.status(400).json({ success: false, message: 'User exists already' }) }

      user = new User({
        username,
        email,
        password,
        firstName, 
        lastName,
        street, 
        streetNumber,
        postalCode,
        country,
        city
      })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, process.env.JWT, { expiresIn: 21600 }, (err, token) => {
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
