const DomainsController = require('../controllers/domainsController');
const express = require('express');
var router = express.Router();

router.get('/', DomainsController.list);
router.get('/with-subjects', DomainsController.listWithSubjects);
router.get('/from-subject', DomainsController.listFromSubject);

module.exports = router;
