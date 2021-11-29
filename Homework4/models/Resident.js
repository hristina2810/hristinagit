 let Resident = [
      {
          id: 1,
          name: 'Janko Glavcev',
          hasCar: 'false',
          isBoomer: 'true',
      },
  ];
  const getAllResidents = async() => {
  return Residents;
},

const getResidentById = async (id) => {
    return Resident.find((Resident) => Resident.id === id);
};

const addResident = async (newResidentInfo) => {
    const newResident = {
        id:Resident.length + 1,
        name:newResidentInfo.name,
        hasCar:newInfo.hasCar,
        isBoomer: newInfo.isBoomer,
    };
    residents.push(newResident);
};

const editResident = async (id,newInfo) => {
    residents = residents.map((resident) => {
    if(resident.id === id) {
        return{
            id: Resident.lenth + 1,
            name: newInfo.name,
            hasCar: newInfo.hasCar,
            isBoomer: newInfo.isBoomer,
        };
    } else {
     return Resident;
    }
});
};

const deleteResident = async (id) => {
    Residents = Residents.filter((Resident) => Resident.id !== id);
};


module.exports = {
    getAllResidents,
    getResidentById,
    addResident,
    editResident,
    deleteResident,
}
    
