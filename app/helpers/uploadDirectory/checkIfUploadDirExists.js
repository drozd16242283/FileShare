const pathExists = require('path-exists');

const currentPathToUploadDirectory = require('./getPathToUploadDir');
const createUploadDirectory        = require('./createUploadDirectory');


/**
 *  This function is checking if upload directory exists.
 *  If not, it creates them.
 */
const checkIfUploadDirectoryExists = () => {
    pathExists(currentPathToUploadDirectory).then(exists => {
        if (!exists) {
            createUploadDirectory();
        } else {
            // directory exists
            return;
        }
    })
};


module.exports = checkIfUploadDirectoryExists;
