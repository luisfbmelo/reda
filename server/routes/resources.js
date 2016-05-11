const ResourcesController = require('../controllers/resourcesController');
const express = require('express');
var router = express.Router();
const jwtUtil = require('../utils/jwt');

router.get('/', ResourcesController.list);
router.get('/recent', ResourcesController.recent);
router.get('/highlight', ResourcesController.highlight);
router.get('/search', ResourcesController.search);
router.get('/details/:slug', ResourcesController.details);
router.post('/new-resource', jwtUtil.requireAuth, ResourcesController.create);

module.exports = router;
