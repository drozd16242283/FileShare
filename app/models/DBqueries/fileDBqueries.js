'use strict';
//const mongoose = require('../../libs/mongoose');

const File = require('../../models/fileModel').File;


exports.findAllFiles = (cb) => {
    File.find({}, cb);
};

exports.saveFileInfoToDB = fileInfo => {
    let file = new File(fileInfo);

    file.save((err, file) => {
        if (err) throw err;
        console.log(file);
    })
};
