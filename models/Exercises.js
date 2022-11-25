const mongoose = require('mongoose');
const {Schema} = mongoose;

const Exercise = mongoose.model(
    'Exercise', new Schema({
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        userId: {
            type: String,
            required: true
        }
    })
)

module.exports = Exercise;