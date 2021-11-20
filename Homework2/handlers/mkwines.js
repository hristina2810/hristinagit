const { Router } = require('express');
const { router } = require('../app');
const mkwinesHandlers = require('./mkwines');

router.get('./mkwines', mkwinesHandlers.getAllWines);
router.post('./mkwines', mkwinesHandlers.getAllWines);

const wines = [
{
    wine:'red'
    sort:'Vranec'
    vintage:2004
},
{
    wine:'red'
    sort:'Stanusina'
    vintage:2020
},
{
    wine:'white'
    sort:'Temjanika'
    vintage:2020
},
{
    wine:'white'
    sort:'Smederevka'
    vintage:2020
}
];

const getAllWines(req,res,next)=>{
    return response.Status(200).json(mkwines);


    module.exports = {
        getAllWines,
        getWinesById,
     };
    };