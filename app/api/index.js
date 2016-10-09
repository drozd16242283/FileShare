const router = require('express').Router();

import * as api from './filesApi'

router.get('/', api.UploadPage);
router.post('/fileUpload', api.UploadFile);
router.get('/files', api.findAllFiles);

router.get('/:fileToken', api.CurrentFile)


export default router;
