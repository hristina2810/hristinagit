const router = require('express').Router();
const ResidentsHandlers = require('../controllers/Residents');
const bodyValidator = require('../middlewares/residentValidator');


router.get('/residents', ResidentsHandlers.getAllResidents);
router.post('/residents', bodyValidator, ResidentsHandlers.addNewResident);
router.delete('/residents/:id', ResidentsHandlers.deleteResident);
router.put('/residents/:id', bodyValidator, ResidentsHandlers.updateResident);

router.use('*', (req,res,next) => {
return res.status (404).json('Not found.');
});




module.exports = router;