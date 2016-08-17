const log    = require('../libs/log')(module);
const multer = require('../config/multer');

var multerUpload = (req, res, next) => {
    multer(req, res, (err) => {
        if (err) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                log.error('Файл слишком большой');
                req.flash('uploadError', 'Файл слишком большой');
                res.redirect('/');
            }
        } else {
            next();
        }
    });
};


module.exports = multerUpload;
