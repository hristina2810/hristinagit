const router = require ('express').Router();
const swaggerUi = require ('swagger-ui-express');


router.use('/node_modules', swaggerUi.serve);
router.get('/swaggerUiConfig' , (req,res,next) => {});
router.get('/swaggerUiControllers' ,(req,res,next) => {});
router.get('/swaggerRouter' , (req,res,next) => {});
router.get('/swaggerValidator' , (req,res,next) => {});
router.get('/swaggerSecurity' , (req,res,next) => {});
router.get('/swaggerRaw' , (req,res,next) => {});

router.use('*', async (req, res, next) => {
    return res.status(404).json('Not Found.');
  });

module.exports = router;