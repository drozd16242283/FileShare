const FileLoadController = require('./controllers/FileLoadController');

const fileUploadingMiddleware = require('./middleware/uploadingWithErrorHandling');


module.exports = app => {

    // Index page '/'
    app.get('/', FileLoadController.ShowUploadPage);
    app.post('/', fileUploadingMiddleware, FileLoadController.UploadFile);

    // Main page '/main'
    app.get('/main', (req, res) => {
        res.json({ user: 'Oleg' });
    });

    // File page '/${fileToken}'
    app.get('/:fileToken', (req, res) => {
        console.log(req.file); // undef

        res.send('file page');
    });

};
