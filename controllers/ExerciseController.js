const Exercise = require('../models/Exercises');
const User = require('../models/User');

module.exports = class ExerciseController {
    static async newExercise(req, res) {
        const {description, duration, date} = req.body;
        const userId = req.params.id;
        const user = await User.findById(userId );
        if (!user) {
            res.status(400).json({
                error: 'User not found'
            })
        } else {
            const exercise = new Exercise({
                description,
                duration,
                date: date ? new Date(date) : new Date(),
                userId
            });
            await exercise.save();
            const exerciseId = exercise._id.toString();

            let responseObj = {
                username: user.username,
                description: exercise.description,
                duration: exercise.duration,
                _id: userId,
                date: exercise.date.toDateString()
            }
            res.json(responseObj);
            console.log(responseObj);
        }
    }

    static async getExerciseLog(req, res, next) {

        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            res.status(400).json({
                error: 'User not found'
            })
        } else {
            const { from, to, limit } = req.query;
            let query = Exercise.find({ userId });
            if (from || to) {
                query = query.where('date');
                if (from) {
                    query = query.gte(new Date(from));
                }
                if (to) {
                    query = query.lte(new Date(to));
                }
            }
            if (limit) {
                query = query.limit(Number(limit));
            }
            const exercises = await query.exec();
            const responseObj = {
                _id: userId,
                username: user.username,
                count: exercises.length,
                log: exercises.map(exercise => {
                    return {
                        description: exercise.description,
                        duration: exercise.duration,
                        date: exercise.date.toDateString()
                    }
                })
            }
            res.json(responseObj);
            console.log(responseObj);
        }
    }
}