const Resident =  require('../models/Resident');
const getAllResidents = async(req,res,next) => {
try {
    const residents = await Resident.find();
    return res.status(200).json(residents);
}catch (err) {
    return res.status(500).json(err);
}
};

const addNewResident = async(req,res,next) => {
    const residentBody = req.Body;
    const newResident = {
        name: residentBody.name
    };
if(!residentBody.name ){
    return res.status(400).json('Missing resident name!')
}
};

try {
   await Resident.create(newResident);
    return res.status(201).json('Resident added!');
} catch (err) {
    return res.status(500).json(err);
};
const updateResident = async(req,res,next) => {
    const id = req.params.id;
    const residentBody = req.body;
const newResident ={
    name: residentBody.name,
};
try {
    await Resident.findByIdAndUpdate(id, newResident);
    return res.status(200).json('Update resident!');
} catch (err) {
    return res.status(500).json(err);
};
};
const deleteResident = async(req,res,next) => {
    const id = req.params.id;
 try {
     await Resident.findByIdAndDelete(id);
     return res.status(200).json('Deleted resident with ID:' + id);
 } catch (err) {
     return res.status(500).json(err);
 }
 };


 module.exports = {
     getAllResidents,
     addNewResident,
     updateResident,
     deleteResident,
 };