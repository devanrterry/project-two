var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var workoutSchema = new Schema({

// })

var userSchema = new Schema({
    name: String,
    email: String,
    // workouts: [workoutSchema],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);