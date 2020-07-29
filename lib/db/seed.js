const Summary = require('../models/Summary')
const fs = require('fs')

const axios = require('axios').default;
/*
axios.get('https://api.covid19api.com/summary')
  .then(function (response) {
    // handle success      
    console.log(response.data);
    fs.writeFile('./lib/db/summarydata.json', JSON.stringify(response.data), err => {
        if (err) {
            console.log(err)
        } else {
            console.log('success')
        }
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/

const summarydata = require('./summarydata.json')

Summary.deleteMany({}).then( () => {
  Summary.create(summarydata.Countries)
  .then(summary => {
    console.log(summarydata.Countries)
    process.exit()
  })
  .catch(err => {
    console.log(err)
    process.exit()
  })
})

/*
const fetch = require('node-fetch');


const url = 'https://api.covid19api.com/summary'

fetch(url)
    .then(res => res.json())
    .then(res => {
        let countries = JSON.stringify(res)
        fs.writeFile('./lib/db/data.json', countries, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })

*/

  