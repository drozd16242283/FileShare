const router = require('express').Router();

import * as api from './filesApi'

router.get('/', api.UploadPage);
router.post('/fileUpload', api.UploadFile);
router.get('/files', api.findAllFiles);


export default router;
