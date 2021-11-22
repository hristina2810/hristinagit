const { Router } = require('express');
const { router } = require('../app');
const mkwinesHandlers = require('./mkwines');

router.get('./mkwines', mkwinesHandlers.getAllWines);
router.post('./mkwines', mkwinesHandlers.getAllWines);

const wines = [
{
    id: 1,
    name:'Vranec',
    year:2004
},
{
    id: 2,
    name:'Stanusina',
    year: 2020
},
{
    id:3,
    name:'Temjanika',
    year:2020
},
{
    id: 4,
    name:'Smederevka',
    year: 2020
}
];

const getAllWines=(req,res,next)=>{
    return response.Status(200).json(mkwines);


    module.exports = {
        getAllWines,
        getWinesById,
     };
    };
    