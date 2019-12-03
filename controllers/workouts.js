var User = require('../models/user');

module.exports = {
    new: newWorkout,
    create,
    index,
    show,
    delete: deleteWorkout
}

function deleteWorkout(req, res){
    Workout.findByIdAndDelete(req.params.id, function(err){
      res.redirect('/workouts');
    });
}

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
        Workout.find({ workout: workout._id }, function (err, workout) {
            res.render('workouts/show', { title: 'Workout Details', user, workouts });
        });
    });
};

function index(req, res) {
    User.findById(req.user._id, function (err, user) {
        console.log(user);
        res.render('workouts/index', { workouts: user.workouts, title: "View Previous Workout", user: req.user })
    });
};

function create(req, res) {
    User.findById(req.user._id, function (err, user) {
        user.workouts.push(req.body);
        user.save(function (err) {
            res.redirect('/workouts')
        })
    })
};

function newWorkout(req, res) {
    res.render('workouts/new', {
        title: 'Add Workout',
        user: req.user
    });
};

