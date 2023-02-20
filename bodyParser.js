const bodyParser = require('body-parser');

function parserPackage(app) {
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
}

module.exports=parserPackage
