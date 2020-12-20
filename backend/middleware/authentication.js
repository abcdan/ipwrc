const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const token = req.header('token')
  if (!token) return res.status(401).json({ succes: false, message: "couldn't authenticate" })

  try {
    const decoded = jwt.verify(token, process.env.JWT)
    req.user = decoded.user
    next()
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Invalid Token' })
  }
}
