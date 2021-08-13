// requireing pakages
const router = require('express').Router();
const controller = require("./controller/controller.js")


router.get('/' ,controller.home);

router.post('/pdf_create' ,controller.create);

router.get('/download/:id' ,controller.download);


module.exports  = router;