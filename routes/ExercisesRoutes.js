const ExerciseController = require('../controllers/ExerciseController');
const router = require('express').Router();

router.post('/:id/exercises', ExerciseController.newExercise);
router.get('/:id/logs', ExerciseController.getExerciseLog);



module.exports = router;