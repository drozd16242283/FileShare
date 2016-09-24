import mkdirp from 'mkdirp'

import currentPathToUploadDirectory from './getPathToUploadDir'

import log from '../../libs/log'

const logger = log(module)


/**
* This function is create the upload directory by {currentUploadDirectory} value
* For example: "uploads/07-08-2016"
*/
let createUploadDirectory = () => {
    mkdirp(currentPathToUploadDirectory, (err, success) => {
        if (err) logger.error(err)
    })
}

export default createUploadDirectory
