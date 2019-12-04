var Workout = require('../models/workout');
var Activity = require('../models/workout');

module.exports = {
    new: newActivity,
    create
}

function create(req, res) {
    req.body.workout = req.params.id
    Activity.create(req.body, function(err, activity){
        res.redirect('/workouts/new');
    });
}

// function newActivity(req, res) {
//     Workout.findById(req.params.id, function(err, workout) {
//       res.render('workouts/new', {
//         title: 'Add Workout',
//         workout
//       });
//     })
//   }