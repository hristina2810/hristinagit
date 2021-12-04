const mongoose = require('mongoose');

const Car = mongoose.model('cars', {
    make:{ type: String, index: true, unique: true},
    pkgManager: String,
    isStable: Boolean
});

module.exports = Car;
