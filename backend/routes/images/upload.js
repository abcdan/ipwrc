const User = require('../../database/models/User')
const authentication = require('../../middleware/authentication')

const AWS = require('aws-sdk')

const multer = require('multer')

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
  app.post(endpoint, upload.single('file'), async (req, res) => {
      res.json( {
          location: req.file.filename
      })
      console.log(req.files)
  })
}
