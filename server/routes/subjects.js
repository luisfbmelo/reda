const SubjectsController = require('../controllers/subjectsController');
const express = require('express');
var router = express.Router();

router.get('/', SubjectsController.list);
router.get('/with-domains', SubjectsController.listWithDomains);

module.exports = router;
