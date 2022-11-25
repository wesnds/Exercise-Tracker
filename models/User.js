const mongoose = require('mongoose');
const {Schema} = mongoose;

const User = mongoose.model(
    'User', new Schema({
        username: {
                type: String, 
                required: true
            },
        log: [{
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
        }]
    })
)

module.exports = User;