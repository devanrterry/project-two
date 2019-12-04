var express = require('express');
var router = express.Router();
var activitiesCtrl = require('../controllers/activities');

router.post('/:id', activitiesCtrl.create);

module.exports = router;