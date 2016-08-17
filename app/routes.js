const FileLoadController = require('./controllers/FileLoadController');

const fileUploadingMiddleware = require('./middleware/uploadingWithErrorHandling');


module.exports = app => {

    /**
    * Index page
    */
    app.get('/', FileLoadController.ShowUploadPage);
    app.post('/', fileUploadingMiddleware, FileLoadController.UploadFile);

    app.get('/main', (req, res) => {
        res.render('main');
    });


};
