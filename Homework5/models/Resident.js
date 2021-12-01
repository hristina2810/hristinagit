const mongoose = require('mongoose');
const Resident = mongoose.model('Residents', {
    name: String,

});



module.exports = Resident;