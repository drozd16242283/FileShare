import randomToken from 'rand-token'

class File {
    constructor(file) {
        this.fileName        = file.originalname
        this.localFileName   = file.filename
        this.filePath        = this.cutFilePath(file.path)
        this.fileDestination = this.cutFileDestination(file.destination)
        this.fileSize        = this.setFormatFileSize(file.size)
        this.fileComment     = ''
        this.fileToken       = this.createFileToken()
        this.isImage         = this.isImage(file.mimetype)
    }

    getFullFileInfo() {
        return {
            fileName:        this.fileName,
            localFileName:   this.localFileName,
            filePath:        this.filePath,
            fileDestination: this.fileDestination,
            fileSize:        this.fileSize,
            fileComment:     this.fileComment,
            fileToken:       this.fileToken,
            downloadLink:    this.createDownloadLink(),
            isImage:         this.isImage
        };
    }


    // In this function i cut system path like a "var/www/nodejs/FileShare"
    cutFilePath(path) {
        const SYMBOLS_OF_SYSTEM_PATH = 26
        const PATH_LENGTH = path.length

        let newFilePath = path.slice(SYMBOLS_OF_SYSTEM_PATH, PATH_LENGTH)

        return newFilePath
    }

    // In this function i cut the original file dest and get "uploads/${currentDate}"
    cutFileDestination(originalFileDest) {
        const USLESS_SYMBOLS =  37
        const DEST_LENGTH = originalFileDest.length

        const newFileDest = originalFileDest.slice(USLESS_SYMBOLS, DEST_LENGTH)

        return newFileDest
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

}


export default File
