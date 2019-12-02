var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');

router.get('/new', workoutsCtrl.new);
router.post('/', workoutsCtrl.create);
router.get('/', workoutsCtrl.index);
 
module.exports = router;