const User = require('../../database/models/User')
const authentication = require('../../middleware/authentication')

const AWS = require('aws-sdk')

const multer = require('multer')

const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const extension = file.mimetype.split('/')[1]
      cb(null, Date.now() + '.' + extension)
    }
  })

  const upload = multer({ storage: storage });


module.exports = (app, endpoint) => {
  app.post(endpoint, authentication, upload.single('file'), async (req, res) => {
      if(!req.user.admin) {
        fs.unlink('./uploads/' + req.file.filename)
          return res.status(401).json({ success: false, message: 'you\'re not an admin' })
      }
      res.json( {
          location: req.file.filename
      })
  })
}
