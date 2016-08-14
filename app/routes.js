const FileLoadController = require('./controllers/FileLoadController');

const multer = require('./config/multer');

var mult = require('./middleware/multerUpload');



module.exports = app => {

    /**
    * Index page
    */
    app.get('/', FileLoadController.ShowUploadForm);
    app.post('/', mult, FileLoadController.UploadFile);


};
