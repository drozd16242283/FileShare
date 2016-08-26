'use strict';
const ifCurrentUploadDirExists = require('../helpers/uploadDirectory/checkIfUploadDirExists');

const File = require('../helpers/fileClass');

const fileDBqueries = require('../models/DBqueries/fileDBqueries');


exports.ShowUploadPage = (req, res) => {
    ifCurrentUploadDirExists();

    let uploadErrorMessage = req.flash('uploadError');

    res.json({ status: 'true' });
};

exports.UploadFile = (req, res) => {
    let file = new File(req.file);

    fileDBqueries.saveFileInfoToDB(file.getFullFileInfo());

    res.redirect(`/${file.fileToken}`);
};
