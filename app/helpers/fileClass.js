import randomToken from 'rand-token'

class File {
    constructor(file) {
        this.fileName      = file.originalname;
        this.localFileName = file.filename;
        this.isImage       = this.isImage(file.mimetype);
        this.filePath      = file.path;
        this.fileSize      = this.setFormatFileSize(file.size);
        this.fileComment   = '';
        this.fileToken     = this.createFileToken();
    }

    getFullFileInfo() {
        return {
            fileName:      this.fileName,
            localFileName: this.localFileName,
            filePath:      this.filePath,
            fileSize:      this.fileSize,
            comments:      this.fileComment,
            token:         this.fileToken,
            downloadLink:  this.createDownloadLink()
        };
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

    isImage(type) {
        let imageType = type.substr(0, 5);

        if (imageType === 'image') {
            return true;
        } else {
            return false;
        }
    }

    createFileToken() {
        return randomToken.generate(9);
    }

    createDownloadLink() {
        let downloadToken = randomToken.generate(20);

        return `${this.fileToken}/${downloadToken}/${this.fileName}`;
    }

}


export default File
