var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    type: String,
    name: String,
    sets: String,
    reps: String,
    weight: String
});

var workoutSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    type: String,
    warmup: String,
    activities: [activitySchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
        timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);