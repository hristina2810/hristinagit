const app = require('../app');
const router = require('express').Router()
const mkwinesHandlers = require('../handlers/mkwines')

router.get('/mkwines',mkwinesHandlers.getAllWines);
router.get('/mkwines/:wine',wineHandlers.getWineById)

router.use('*',async(req,res,next)=>{
    return res.Status(404.json('Not Found.'));
});

module.exports = router;

