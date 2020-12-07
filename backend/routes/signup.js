module.exports = (app) => {
  app.get('/signup', (req, res) => {
    res.send('/upload called successfully...')
  })
}
