//var multer = require('../config/multer');


exports.ShowUploadForm = (req, res) => {
    var errorMessage = req.flash('error');

    res.render('index', {
        error: errorMessage
    });
};

exports.UploadFile = (req, res) => {
    //console.log(req.flash('info'));
    console.log(req.file);
    res.send('success');
};
