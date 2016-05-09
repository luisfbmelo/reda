const FormatsController = require('../controllers/formatsController');
const express = require('express');
var router = express.Router();

router.get('/', FormatsController.list);

module.exports = router;
