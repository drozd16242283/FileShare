import multer              from 'multer'

import config              from '../config/'
import getCurrentUploadDir from '../helpers/uploadDirectory/getPathToUploadDir'


// MAX_FILE_SIZE is set max size of uploaded files is bytes (50 mb)
const MAX_FILE_SIZE = 1000000 * (config.get('maxUploadFileSizeMB'))

let limits = {
    files: 1,
    fileSize: MAX_FILE_SIZE
}

let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, getCurrentUploadDir),
    filename:    (req, file, cb) => cb(null, file.originalname + '-' + Date.now())
})

let uploadStorage = multer({ storage: storage, limits: limits }).single('file')

export default uploadStorage
