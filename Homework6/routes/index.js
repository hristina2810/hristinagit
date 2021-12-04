const router = require('express').Router();

const {
    getAllCars, 
    findCarByMake,
    bulkInsertCars,
} = require('../handlers/cars')
 const {
     bulkInsertCarModels,
     getAllCarModelsBySpentLitters,
 } = require('../handlers/carmodels');

const{getAllCarModelsByPowerTrain} = require('../handlers/CarModels');

const{getAllWhiteCarModelsByPowerTrain} = require('../handlers/CarModels');

 const PREFIX = process.env.PREFIX;

 router.get(PREFIX + 'carmodels', getAllCarModelsBySpentLitters);
 router.post(PREFIX + 'carmodels', bulkInsertCarModels);

 router.get(PREFIX + '/cars', getAllCars);
 router.get(PREFIX + '/cars: make', findCarByMake);
 router.get(PREFIX + '/cars', bulkInsertCars);
 router.get(PREFIX + '/carmodels', getAllCarModelsByPowerTrain);
 

router.use('*', (req,res,next) => {
    return res.status(404).json('Bad URL')
});


module.exports = router;
