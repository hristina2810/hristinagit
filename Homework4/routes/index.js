const routes = require('express').Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./app-docs.json');

const ResidentHandlers = require('../handers/Residents');


router.use('/api.docs.json', swaggerUi.serve);
router.get('/api-docs.json', swaggerUi.setup(swaggerDocs));

router.get('/residents', ResidentHandlers.getAllResident);
router.get('/residents:id', ResidentHandlers.getResidentById);
router.post('/planets', residentHandlers.addNewResident);
router.put('/residents',residentHandlers.updateResident);
router.delete('/residents:id',residentHandlers.deleteResident );



module.exports = routes;
