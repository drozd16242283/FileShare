'use strict';
const File = require('../../models/fileModel').File;


exports.saveFileInfoToDB = fileInfo => {
    let file = new File(fileInfo);

    file.save((err, file) => {
        if (err) throw err;
        console.log(file);
    })
};
