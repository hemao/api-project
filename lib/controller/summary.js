const Summary = require("../models/Summary")

module.exports = {
    index: (req, res) => {
        Summary.find({})
            .then(summary => {
              console.log(summary)
              res.json(summary)
        })
    }       
}