'use strict';
const mongoose = require('../libs/mongoose');

let Schema = mongoose.Schema;

let File = new Schema({
    fileName: String,
    localFileName: String,
    filePath: String,
    fileSize: String,
    comments: String,
    token: String,
    downloadLink: String,
});


exports.File = mongoose.model('File', File);
