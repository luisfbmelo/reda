const SystemsController = require('../controllers/systemsController');
const express = require('express');
var router = express.Router();

router.get('/', SystemsController.list);

module.exports = router;
