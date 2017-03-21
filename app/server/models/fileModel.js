import mongoose from '../libs/mongoose'


let FileSchema = new mongoose.Schema({
    fileName:        String,
    localFileName:   String,
    filePath:        String,
    fileDestination: String,
    fileSize:        String,
    fileComment:     String,
    fileToken:       String,
    downloadLink:    String,
    isImage:         Boolean,
    fileOwner:       String
})


const FileModel = mongoose.model('File', FileSchema)


export default FileModel
