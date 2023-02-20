const express = require('express')
const routes = require('./routes');
const parserPackage = require('./bodyParser');

const app = express()
const PORT = 3000

routes(app)
parserPackage(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
