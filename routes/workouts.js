var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');

router.get('/new', workoutsCtrl.new);
router.post('/', workoutsCtrl.create);
router.get('/', workoutsCtrl.index);
router.get('/:id/edit', workoutsCtrl.edit);
router.get('/:id', workoutsCtrl.show);
router.put('/:id', workoutsCtrl.update);
router.delete('/:id', workoutsCtrl.delete);
 
module.exports = router;