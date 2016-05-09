const ResourcesController = require('../controllers/resourcesController');
const express = require('express');
var router = express.Router();

router.get('/', ResourcesController.list);

module.exports = router;
