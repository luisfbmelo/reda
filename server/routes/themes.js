const ThemesController = require('../controllers/themesController');
const express = require('express');
var router = express.Router();

router.get('/', ThemesController.list);

module.exports = router;
