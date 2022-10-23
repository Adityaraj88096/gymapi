const Exercise = require('../models/Exercise');
const BodyPart = require('../models/BodyPart');
const exerciseCtrl = {};

exerciseCtrl.getAllExercises = async(req, res) => {
       try{
        const response = await Exercise.find();      
        res.status(200).send(response)
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.getExerciseById = async(req, res) => {
       try{
        const response = await Exercise.find({id: req.params.id});      
        res.status(200).send(response[0])
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.getExercisesByBodyPart = async(req, res) => {
       try{
        const response = await Exercise.find({bodyPart: req.params.id});      
        res.status(200).send(response)
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.getExercisesByName = async(req, res) => {
       try{
        const response = await Exercise.find({name: req.params.id});      
        res.status(200).send(response)
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.getExercisesByTargetMuscle = async(req, res) => {
       try{
        const response = await Exercise.find({target: req.params.id});      
        res.status(200).send(response)
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.getExercisesByEquipment = async(req, res) => {
       try{
        const response = await Exercise.find({equipment: req.params.id});      
        res.status(200).send(response)
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.getBodyParts = async(req, res) => {
       try{
        const response = await BodyPart.find();   
        res.status(200).send(response[0]);
        } catch(err) {
        res.status(500).send(err)
    }
};
exerciseCtrl.postBodyParts = async(req, res) => {
    const response = await BodyPart(req.body);      
       try{
        await BodyPart.create(response);
        res.status(200).send({Message: "Body part created."});
        } catch(err) {
        res.status(500).send(err);
    }
};

module.exports = exerciseCtrl;