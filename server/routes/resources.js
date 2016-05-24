const ResourcesController = require('../controllers/resourcesController');
const express = require('express');
var router = express.Router();
const jwtUtil = require('../utils/jwt');
const usesUser = require('../services/usesUser');

router.get('/', ResourcesController.list);
router.get('/recent', usesUser(), ResourcesController.recent);
router.get('/highlight', ResourcesController.highlight);
router.get('/related/:slug', ResourcesController.related);
router.get('/search', usesUser(), ResourcesController.search);
router.get('/details/:slug', usesUser(), ResourcesController.details);
router.post('/', jwtUtil.requireAuth, ResourcesController.createOrUpdate);
router.put('/:slug', jwtUtil.requireAuth, ResourcesController.createOrUpdate);
router.delete('/', jwtUtil.requireAuth, ResourcesController.deleteCollective);
router.delete('/:slug', jwtUtil.requireAuth, ResourcesController.deleteEl);

module.exports = router;
