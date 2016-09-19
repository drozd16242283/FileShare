import mkdirp from 'mkdirp'

import currentPathToUploadDirectory from './getPathToUploadDir'


const log    = require('../../libs/log')(module);


/**
* This function is create the upload directory by {currentUploadDirectory} value
* For example: "uploads/07-08-2016"
*/
export default createUploadDirectory = () => {
    mkdirp(currentPathToUploadDirectory, err => {
        if (err) {
            log.error(err);
        }
    })
}
