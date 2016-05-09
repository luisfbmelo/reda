const YearsController = require('../controllers/yearsController');
const express = require('express');
var router = express.Router();

router.get('/', YearsController.list);

module.exports = router;
