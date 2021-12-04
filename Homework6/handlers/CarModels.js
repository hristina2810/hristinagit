const CarModel = require('../core/CarModel');

const getAllCarModelsBySpentLitters = async(req,res,next) => {
     const targetSpentLitters = +req.quiery.spentLitters;
     if(!targetSpentLitters) {
         return res.status(400).json('SpentLitters is required.');
     }
     try{
         const matchingModels = await CarModel.find()
         .where('1/100kmh')
         .gt(3)
         .lt(5)
         .limit(3);
         return res.status(200).json(matchingModels);
     } catch (err) {
         return res.status(500).json(err);
     }
};
const bulkInsertCarModels = async(req,res,next) => {
    const models = req.body.carModels;
    if(!models || models.gt(3) || models.lt(5)) {
        return res.status(400).json('Invalid request.');
    }
    try {
        await CarModel.insertMany(models);
        return res.status(201).json('Inserted models!');
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getAllCarModelsByPowerTrain = async(req,res,next) => {
    const targetPowerTrain = +req.query.powertrain;
    if(!targetpowerTrain) {
        return res.status(400).json('PowerTrain is required!');
    }
    try{
        const matchingModels = await CarModel.find().sort(make).where({ spowertrain : hybrid });
        return res.status(200).json(matchingModels);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getAllWhiteCarModelsByPowerTrain = async(req,res,next) => {
    const targetPowerTrain = +req.query.powertrain;
    if(!targetPowerTrain) {
        return res.status(400).json('PowerTrain is required.');
    }
    try {
        const matchingModels = await CarModel.find().where(powertrain).lt(6).where({ color: white}).limit(5);
            return res.status(200).json(matchingModels);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    getAllCarModelsBySpentLitters,
    bulkInsertCarModels,
    getAllCarModelsByPowerTrain,
    getAllWhiteCarModelsByPowerTrain,
};
