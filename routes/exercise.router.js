const express = require('express');
const exerciseRouter = express.Router();
const {getAllExercises, getExerciseById, getExercisesByBodyPart, getExercisesByName, getExercisesByTargetMuscle, getExercisesByEquipment, getBodyParts, postBodyParts} = require('../controllers/exerciseController');
// Total 8 Endpoints.
// 1st endpoint - Get all Exercises.
exerciseRouter.get(`/exercise/:id`, getExerciseById);
// 2nd endpoint - Get Exercise by id.
exerciseRouter.get('/exercises', getAllExercises);
// 3rd Endpoint - Get Exercises by Body part.
exerciseRouter.get('/exercises/bodypart/:id', getExercisesByBodyPart);
// 4th Endpoint - Get Exercises by Name.
exerciseRouter.get('/exercises/name/:id', getExercisesByName);
// 5th Endpoint - Get Exercises by Target Muscle
exerciseRouter.get('/exercises/target/:id', getExercisesByTargetMuscle );
// 6th Endpoint - Get Exercises by Body part.
exerciseRouter.get('/exercises/equipment/:id', getExercisesByEquipment );
exerciseRouter.get('/bodyparts', getBodyParts );
exerciseRouter.post('/bodyparts', postBodyParts);
module.exports = exerciseRouter;