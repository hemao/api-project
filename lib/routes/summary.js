const express = require('express')
const router = express.Router();

const summaryController = require('../controller/summary')

const bodyParser = require("body-parser")
router.use(bodyParser.json())

//http://localhost:3000/Summary/
router.get('/', summaryController.index) 

//http://localhost:3000/Summary/country/name of your country here
router.get('/country/:country', summaryController.showCountry) 

//http://localhost:3000/Summary/
router.post('/', summaryController.create) 

//http://localhost:3000/Summary/country/name of your country here
router.put('/country/:country', summaryController.edit) 

//http://localhost:3000/Summary/country/name of your country here
router.delete('/country/:country', summaryController.delete) 

module.exports = router