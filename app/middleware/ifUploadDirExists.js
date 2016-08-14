//const pathExists = require('path-exists');
const uploadDir  = require('../helpers/uploadDirectory/getUploadDirectory');
const createDir  = require('../helpers/uploadDirectory/createUploadDirectory');

/**
 * [This middleware function check if upload directory exists]
 */
var ifUploadDirExists = (req, res, next) => {
    if (!req.session.uploadDir) {
        createDir();
        req.session.uploadDir = uploadDir;
    } else {
        next();
    }
};


module.exports = ifUploadDirExists;
