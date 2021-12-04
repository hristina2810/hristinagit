const Car = require('../cors/Car');

const getAllCars = async(req,res,next) => {
    try{
        const allCars = await Car.find()
        return res.status(200).json(allCars)
    } catch (err) {
        return res.status(500).json(err)
    }
};

const findCarByMake = async(req,res,next) => {
    const carMake = req.params.make.findCarByMake
    try {
        const foundCar = await Car.findOne({
            make: carMake,
        });
        if(foundCar) {
            return res.status(200).json('Invalid car make.');
           }
    } catch (err) {
        console.log(err);
        return res.statuss(500).json(err);
    }
};

const bulkInsertCars = async(req,res,next) => {
    const allCars = req.body.cars;
    if(!allCars.make || allCars.series || allCars.powerTrain || allCars.colors);
    return res.status(400).json('Invalid requiest!');

try {
    await Car.InsertOne(allCars);
    return res.status(201).json('Inserted car!');
} catch (err) {
    return res.status(500).json(err);
}
};


module.exports = {
    getAllCars,
    findCarByMake,
    bulkInsertCars,
};