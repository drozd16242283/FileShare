import mongoose from '../libs/mongoose'


let FileSchema = new mongoose.Schema({
    fileName:        String,
    filePath:        String,
    fileDestination: String,
    fileSize:        String,
    fileComment:     String,
    fileToken:       String,
    downloadLink:    String,
    isImage:         Boolean,
    fileOwner:       String,
    uploadDate:      String,
    expiresDate:     String
})


const FileModel = mongoose.model('File', FileSchema)


export default FileModel
