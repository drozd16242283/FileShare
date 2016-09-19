const fileDBqueries = require('../models/DBqueries/fileDBqueries');


// POST "/"
exports.UploadFile = (req, res) => {

};

// GET "/file/:fileToken"
exports.CurrentFile = (req, res) => {

};

// GET "/files"
exports.AllFilesList = (req, res) => {
    fileDBqueries.findAllFiles((err, data) => {
        if (err) throw err;

        res.json(data);
    });
};


exports.ListOfUserFiles = (req, res) => {

};

//
exports.DeleteFile = (req, res) => {

};
