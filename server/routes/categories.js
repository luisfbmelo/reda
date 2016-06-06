const CategoriesController = require('../controllers/categoriesController');
const express = require('express');
var router = express.Router();
const jwtUtil = require('../utils/jwt');
const usesUser = require('../services/usesUser');

router.get('/', usesUser(), CategoriesController.list);

module.exports = router;
