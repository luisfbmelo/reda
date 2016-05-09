const DomainsController = require('../controllers/domainsController');
const express = require('express');
var router = express.Router();

router.get('/', DomainsController.list);
router.get('/with-subjects', DomainsController.listWithSubjects);

module.exports = router;
