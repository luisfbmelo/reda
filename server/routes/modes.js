const ModesController = require('../controllers/modesController');
const express = require('express');
var router = express.Router();

router.get('/', ModesController.list);

module.exports = router;
