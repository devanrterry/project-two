var Workout = require('../models/user');

module.exports = {
    new: newWorkout
}

function newWorkout(req, res){
    res.render('workouts/new', { title: 'Add Workout' });
};