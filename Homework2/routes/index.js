const app = require('../app');
const router = require('express').Router()


router.post ('./mkwines',mkwinesHandlers.addNewWine);

async(req,res,next)=>{}

module.exports = router;

