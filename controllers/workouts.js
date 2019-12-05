var User = require('../models/user');
var Workout = require('../models/workout')

module.exports = {
    new: newWorkout,
    create,
    index,
    show,
    delete: deleteWorkout,
    edit,
    update
}

function edit(req, res) {
    Workout.findById(req.params.id, function(err, workout){
        res.render('workouts/edit',{
        workout,
        title: "Edit Workout",
        user: req.user
        });
    });
}

function update(req, res){
    Workout.findByIdAndUpdate(req.params.id, req.body, (err, workout)=>{
        res.redirect('/workouts');
    });
}

function deleteWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/workouts');
    });
}

function show(req, res) {
    Workout.findById(req.params.id, function(err, workout){
        if(err){
            console.log(err); return;
        }
        res.render('workouts/show', {
            workout,
            title: "",
            user: req.user
        });
    });
};

function index(req, res) {
    Workout.find({user: req.user._id}, function(err, workouts) {
        console.log(workouts);
        if (err){ console.log(err); return; }
        res.render('workouts/index', {user: req.user, title: "My Workouts", workouts})
    }); 
};

function create(req, res) {
    req.body.user = req.user._id;
    let workout = new Workout(req.body);
    workout.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/workouts');
    });
};

function newWorkout(req, res) {
    res.render('workouts/new', {
        title: 'Add Workout',
        user: req.user
    });
};

