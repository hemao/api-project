const Summary = require("../models/Summary")

module.exports = {
    index: (req, res) => {
        Summary.find({})
            .then(summaries => {
              console.log(summaries)
              res.json(summaries)
        })
    },  

    showCountry: (req, res) => {
        Summary.find({Country:req.params.country})
          .then(summary => {
            console.log(summary)
            res.json(summary)
        })
    },

    create: (req, res) => {
        Summary.create(req.body)
          .then(summary => {
            res.json(summary)
          })
      },

      edit: (req, res) => {
        console.log(req.params.country)
        Summary.findOneAndUpdate({Country: req.params.country}, req.body,  { new: true })
          .then(summary => {
            res.json(summary)
          })
      },
    
      delete: (req, res) => {
        console.log(req.params)
        Summary.findOneAndRemove({Country: req.params.country})
          .then(summary => {
            res.json(summary)
          })
      },
 
    
    
}