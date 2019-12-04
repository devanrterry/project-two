var Workout = require('../models/workout');

module.exports = {
    create
};

function create(req, res){
    Workout.findById(req.params.id, function(err, workout){
        workout.activities.push(req.body);
        workout.save(function(err){
            res.redirect(`/workouts/${workout._id}`);
        });
    });
}

