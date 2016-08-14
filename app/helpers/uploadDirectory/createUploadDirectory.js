const mkdirp     = require('mkdirp');
const log        = require('../../libs/log')(module);

const currentUploadDirectory = require('./getUploadDirectory');

/**
* This function is create the upload directory by ${currentUploadDirectory} value
* For example: "uploads/07-08-2016"
*/
var createUploadDirectory = () => {
    mkdirp(currentUploadDirectory, err => {
        if (err) log.error(err);
    });
};


module.exports = createUploadDirectory;
