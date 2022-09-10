const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/devsWebsite', {
}).then(() => console.log('Connection succesful'))
  .catch((err) => console.log(err)) 