const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');
const planetHandlers = require('../handlers/planets');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

router.get('/planets', planetHandlers.getAllPlanets);
router.get('/planets', planetHandlers.getPlanetById);
router.post('/planets', planetHandlers.addNewPlanet);
router.put('/planets', planetHandlers.updatePlanet);
router.delete('/planets', planetHandlers.deletePlanet);






module.exports = router;