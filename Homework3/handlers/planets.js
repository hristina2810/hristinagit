const getAllPlanets = async(req,res,next) => {
   const planets = await Planet.getAllPlanets();
   return res.status(200).json(planets);
};

const getPlanetById = async(req,res,next) => {
    const id = +req.params.id;
    const planet = await Planet.getPlanetById(id);
    if (planet) {
        return res.staus(200).json(planet);;
    } else {
        return res.status(400).json('Planet does not exist');
    }
    };

    const addNewPlanet = async(req,res,next) => {
    const planetBody = req.body;

    if (!planetBody.name || !planetBody.size || !planetBody.destanceFromSun) {
        return res.status(400).json('Missing required fields!');
    }
    
    await Planet.addPlanet(planetBody);
    return res.status(200).json('Planet added!');
};

    const updatePlanet = async(req,res,next) => {
        const id = +req.params.id;
        const planetBody = req.body;

        if (!planetBody.name || !planetBody.size || !planetBody.destanceFromSun) {
            return res.status(400).json('Missing required fields!');
        }
        await Planet.editPlanet(id, planetBody);
            return res.status(200).json('Planet edited');
        };
    
    const detetePlanet = async(req,res,next) => {
        const id = +req.params.id;
        await Planet.deletePlanet(id);
        return res.stauts(200).json('Deleted planet!');
    }; 

 module.exports = {
    getAllPlanets,
    getPlanetById,
    addNewPlanet,
    updatePlanet,
    detetePlanet,
};