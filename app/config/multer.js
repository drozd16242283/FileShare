'use strict';
const multer              = require('multer');
const config              = require('./index');
const getCurrentUploadDir = require('../helpers/uploadDirectory/getPathToUploadDir');


// MAX_FILE_SIZE is set max size of uploaded files is bytes (50 mb)
const MAX_FILE_SIZE = 1000000 * (config.get('maxUploadFileSizeMB'));


let limits = {
    files: 1,
    fileSize: MAX_FILE_SIZE
};


let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, getCurrentUploadDir);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    }
});

let upload = multer({ storage: storage, limits: limits }).single('file');


module.exports = upload;
