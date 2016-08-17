'use strict';
const BYTES_IN_MEGABYTE = 1000000;

class File {
    constructor(file) {
        this.fileName      = file.originalname;
        this.localFileName = file.filename;
        this.isImage       = this.isImage(file.mimetype);
        this.filePath      = file.path;
        this.fileSize      = this.setFormatFileSize(file.size);
        //this.token         = this.genFileToken();
        //this.downloadLink  = this.getDownloadLink();
    }

    getFileName() {
        return this.fileName;
    }

    getLocalFileName() {
        return this.localFileName;
    }

    getFilePath() {
        return this.filePath;
    }

    getFormatFileSize() {
        return this.fileSize;
    }

    getFileComment() {
        return this.fileComment;
    }

    isImage(type) {
        let imageType = type.substr(0, 5);

        if (imageType === 'image') {
            return true;
        } else {
            return false;
        }
    }

    setFormatFileSize(size) {
        let i = 0,
            type = ['б', 'Кб', 'Мб'];

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

    }

    getDownloadLink() {

    }

}


module.exports = File;
