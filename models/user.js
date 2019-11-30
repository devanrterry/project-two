var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    type: String,
    name: String,
    sets: {
        type: Number,
        max: 10
    },
    reps: Number,
    weight: Number
});

var workoutSchema = new Schema({
    date: Date,
    type: String,
    warmup: String,
    activity: [activitySchema]
});

var userSchema = new Schema({
    name: String,
    email: String,
    workouts: [workoutSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);