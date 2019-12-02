var Workout = require('../models/user');

module.exports = {
    new: newWorkout,
    create,
    index
}

function index(req, res){
    Workout.find({}, function(err, workouts){
        res.render('../index', {workouts})
    });
}

function create(req, res){
    let workout = new Workout(req.body);
    workout.save(function(err,){
     if (err) return res.render('workouts/new');
        console.log(workout);
        res.redirect('../');
      });
    };

function newWorkout(req, res){
    res.render('workouts/new', { title: 'Add Workout' });
};

