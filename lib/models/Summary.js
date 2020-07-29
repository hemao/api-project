const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const summarySchema = new Schema({
    Country: String,
    CountryCode: String,
    Slug: String,
    NewConfirmed: Number,
    TotalConfirmed: Number,
    NewDeaths: Number,
    TotalDeaths: Number,
    NewRecovered: Number,
    TotalRecovered: Number,
    Date: Date
})

module.exports = mongoose.model('Summary', summarySchema)
      
      
      
      
      