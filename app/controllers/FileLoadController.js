const File = require('../file');
const ifCurrentUploadDirExists = require('../helpers/uploadDirectory/checkIfUploadDirExists');

exports.ShowUploadPage = (req, res) => {
    ifCurrentUploadDirExists();

    var uploadErrorMessage = req.flash('uploadError');


    res.render('index', {
        error: uploadErrorMessage
    });
};

exports.UploadFile = (req, res) => {
    var file = new File(req.file);
    res.send(file);
};
