const ScriptsController = require('../controllers/scriptsController');
const express = require('express');
var router = express.Router();
const jwtUtil = require('../utils/jwt');
const usesUser = require('../services/usesUser');

router.get('/:resource', usesUser(), ScriptsController.details);
router.get('/user-scripts/:resource', jwtUtil.requireAuth, ScriptsController.userScripts);
router.post('/:resource', jwtUtil.requireAuth, ScriptsController.create);
router.delete('/:script', jwtUtil.requireAuth, ScriptsController.delScript);

module.exports = router;
