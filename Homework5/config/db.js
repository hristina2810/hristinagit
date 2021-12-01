const mongoose = require ('mongoose');
const connectToDb = async() => {
await mongoose.connect(process.env.MONGOOSE_URI);
}

module.exports = connectToDb;