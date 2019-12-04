var express = require('express');
var router = express.Router();
var activitiesCtrl = require('../controllers/activities');

router.get('/workouts/:id', activitiesCtrl.new);
router.post('/workouts/:id/', activitiesCtrl.create);

module.exports = router;