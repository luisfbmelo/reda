const LanguagesController = require('../controllers/languagesController');
const express = require('express');
var router = express.Router();

router.get('/', LanguagesController.list);

module.exports = router;
