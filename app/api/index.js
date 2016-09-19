const router = require('express').Router();

const api = require('./filesApi');


router.get('/files', api.AllFilesList);


module.exports = router;
