import mongoose from '../libs/mongoose'


let FileSchema = new mongoose.Schema({
    fileName: String,
    localFileName: String,
    filePath: String,
    fileSize: String,
    comments: String,
    token: String,
    downloadLink: String,
})


let FileModel = mongoose.model('File', FileSchema)


export default FileModel
