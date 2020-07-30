const express = require('express')
const router = express.Router();

const summaryController = require('../controller/summary')

const bodyParser = require("body-parser")
router.use(bodyParser.json())

router.get('/', summaryController.index)
/*
router.get('/country/:country', summaryController.showCountry)
router.post('/', summaryController.create)
router.put('/country/:country', summaryController.edit)
router.delete('/country/:country', summaryController.delete)
*/
module.exports = router