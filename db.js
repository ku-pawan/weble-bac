const mongoose = require('mongoose')
require('dotenv').config()

const connection = mongoose.createConnection(process.env.mongoURl,{ useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
    connection
}