import randomToken from 'rand-token'
import date from 'date-fns'
import expiresDate from './expiresDate'
import config from '../config'

const FREE_STORAGE_DAYS = config.get('filesStorageDaysWithoutRegister')

class File {
    constructor(file) {
        this.fileName        = file.filename
        this.filePath        = this.cutFilePath(file.path)
        this.fileDestination = this.cutFileDestination(file.destination)
        this.fileSize        = this.setFormatFileSize(file.size)
        this.fileComment     = ''
        this.fileToken       = this.createFileToken()
        this.isImage         = this.isImage(file.mimetype)
        this.fileOwner       = 'Анонимно',
        this.uploadDate      = this.getCurrentDateAndTime(),
        this.expiresDate     = expiresDate(FREE_STORAGE_DAYS)
    }

    getFullFileInfo() {
        return {
            fileName:        this.fileName,
            filePath:        this.filePath,
            fileDestination: this.fileDestination,
            fileSize:        this.fileSize,
            fileComment:     this.fileComment,
            fileToken:       this.fileToken,
            downloadLink:    this.createDownloadLink(),
            isImage:         this.isImage,
            fileOwner:       this.fileOwner,
            uploadDate:      this.uploadDate,
            expiresDate:     this.expiresDate
        }
    }


    // In this function i cut system path like a "var/www/nodejs/FileShare"
    cutFilePath(path) {
        const SYMBOLS_OF_SYSTEM_PATH = 24 //33
        const PATH_LENGTH = path.length

        return path.slice(SYMBOLS_OF_SYSTEM_PATH, PATH_LENGTH)
    }

    // In this function i cut the original file dest and get "uploads/${currentDate}"
    cutFileDestination(originalFileDest) {
        const UPLOAD_PATH_LENGTH = 18
        const DEST_LENGTH = originalFileDest.length
        const USEFUL_SYMBOLS =  DEST_LENGTH - UPLOAD_PATH_LENGTH

        return originalFileDest.slice(USEFUL_SYMBOLS, DEST_LENGTH)
    }

    setFormatFileSize(size) {
        let i = 0;
        let type = ['б', 'Кб', 'Мб'];

        while((size / 1000 | 0) && i < type.length - 1) {
            size /= 1024;
            i++;
        }
        return size.toFixed(2) + ' ' + type[i];
    }

    setFileComment(comment) {
        this.fileComment = comment;
    }


    createFileToken() {
        return randomToken.generate(9);
    }

    createDownloadLink() {
        let downloadToken = randomToken.generate(20);

        return `${this.fileToken}/${downloadToken}/${this.fileName}`;
    }

    isImage(type) {
        let imageType = type.substr(0, 5);

        let result = (imageType === 'image') ? true : false

        return result
    }

    getCurrentDateAndTime() {
        return date.format(new Date(), 'DD-MM-YYYY HH:mm')
    }

}


export default File
