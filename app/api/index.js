const router = require('express').Router();

import passport from 'passport'
import * as api from './filesApi'

router.get('/', api.UploadPage);
router.post('/fileUpload', api.UploadFile);

router.get('/files', api.findAllFiles);


router.post('/signup',
    passport.authenticate('signup', { failureRedirect: '/signup', failureFlash: true }),
    api.SignUp
)

router.post('/signin',
    passport.authenticate('signin', { failureRedirect: '/signin' }),
    api.SignIn
)

router.get('/:fileToken', api.CurrentFile)


export default router;
