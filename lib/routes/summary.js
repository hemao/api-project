const express = require('express')
const router = express.Router();

const summaryController = require('../controller/summary')

const bodyParser = require("body-parser")
router.use(bodyParser.json())

/**
 * @api {get} /summary List Global Summary 
 * @apiGroup summary
 * @apiSuccess {Object[]} summary Countries list
 * @apiSuccess {String} summaries.Country Country Name
 * @apiSuccess {String} summaries.CountryCode Country Code
 * @apiSuccess {String} summaries.Slug Slug
 * @apiSuccess {Number} summaries.NewConfirmed New Confirmed
 * @apiSuccess {Number} summaries.TotalConfirmed Total Confirmed
 * @apiSuccess {Number} summaries.NewDeaths New Deaths
 * @apiSuccess {Number} summaries.TotalDeaths Total Deaths
 * @apiSuccess {Number} summaries.NewRecovered Cases recovered 
 * @apiSuccess {Number} summaries.TotalRecovered Total Recovered Cases
 * @apiSuccess {Date} summaries.Date summary date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "title": "Study",
 *      "done": false
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

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