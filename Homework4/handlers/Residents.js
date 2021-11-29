const Resident = require('../models/Resident');


const getAllResident = async(req,res,next) => {}
    return res.status(200).json(residents);

const getResidentById = async(req,res,next) => {}
  const id = req.params.id

const getResidentById = residents.find(resident) = resident.id === id;
if(resident){
return res.status(200).json(resident);
}else {
    return res.status(400).json('Resident does not exist!');
}

const addNewResident = async(req,res,next) => {
const residentBody = req.body;
if(!residentBody.name || !residentBody.hasCar || !residentBody.isBoomer);
return res.status(400).json('Missing required fields');
}

const updateResident = async(req,res,next) => {}
   const id = +req.params.id
   const residentBody = req.body;
   if(!residentBody.name || !residentBody.hasCar || !residentBody.isBoomer);
   return res.status(400).json('Missing required fields!');

   const deleteResident = async(req,res,next) => {
    const id = +req.params.id;
    await Resident.deleteResident(id);
    return res.stauts(200).json('Deleted resident!');
};

module.exports = {
  getAllResident,
  getResidentById,
  addNewResident,
  updateResident,
  deleteResident,
};

