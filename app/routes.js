const router = require('express').Router();

const FileLoadController = require('./controllers/FileLoadController');

const fileUploadingMiddleware = require('./middleware/uploadingWithErrorHandling');

const fileDBqueries = require('./models/DBqueries/fileDBqueries');


    router.get('/', FileLoadController.ShowUploadPage);

    router.post('/', fileUploadingMiddleware, FileLoadController.UploadFile);

    router.get('/files', (req, res) => {
        fileDBqueries.findAllFiles((err, data) => {
            if (err) throw err;

            res.json(data[1].token);
        });
    });

    router.get('/file/:fileId', (req, res) => {
        const param = req.params.fileId;
        res.json({ params: param });
    });


module.exports = router;



/*
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
});*/
