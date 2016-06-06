const AppsController = require('../controllers/appsController');
const express = require('express');
var router = express.Router();
const jwtUtil = require('../utils/jwt');
const usesUser = require('../services/usesUser');

router.get('/', usesUser(), AppsController.list);

module.exports = router;
