const log    = require('../libs/log')(module);
const multer = require('../config/multer');

var multerUpload = (req, res, next) => {
    multer(req, res, (err) => {
        if (err) {
            log.error(err);

            if (err.code === 'LIMIT_FILE_SIZE') {
                req.flash('uploadError', 'Файл слишком большой');
                res.redirect('/');
            }

        } else {
            next();
        }
    });
};


module.exports = multerUpload;
