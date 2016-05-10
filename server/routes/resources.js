const ResourcesController = require('../controllers/resourcesController');
const express = require('express');
var router = express.Router();

router.get('/', ResourcesController.list);
router.get('/recent', ResourcesController.recent);
router.get('/highlight', ResourcesController.highlight);
router.get('/search', ResourcesController.search);
router.get('/details/:slug', ResourcesController.details);

module.exports = router;
