import pathExists from 'path-exists'
import mkdirp from 'mkdirp'

import pathToUploadDirectory from './getPathToUploadDir'
import log from '../../libs/log'

const logger = log(module)

/**
 *  This function is check if upload directory exist.
 *  If not, it create them.
 */
const createUploadDirectory = () => {
    pathExists(pathToUploadDirectory).then(exists => {
        if (!exists) {
            mkdirp(pathToUploadDirectory, (err, success) => {
                if (err) logger.error(err)
            })
        }
    })
}

export default createUploadDirectory
