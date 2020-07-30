const express = require('express');
const router = express()
router.use('/summary', require('./summary'))
module.exports = router