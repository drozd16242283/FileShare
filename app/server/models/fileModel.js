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
    isImage:         String
})


let FileModel = mongoose.model('File', FileSchema)


export default FileModel
