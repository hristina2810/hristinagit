const { model } = require('mongoose');

const CarModel = model('carmodels', {
     make: String,
     series: String,
     powerTrain: String,
     1/100kmh: Number,
     color: String,
});

module.export = CarModel;