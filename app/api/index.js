const router = require('express').Router();

import * as api from './filesApi'

router.get('/', api.UploadPage);
router.get('/files', api.findAllFiles);


export default router;
