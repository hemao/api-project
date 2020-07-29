const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/covid19-api', { useNewUrlParser: true })

//export this db connection
module.exports = mongoose