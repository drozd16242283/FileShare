import filesModel from '../server/models/fileModel'

import ifCurrentUploadDirExists from '../server/helpers/uploadDirectory/checkIfUploadDirExists'

// GET "/"
export function UploadPage(req, res) {

    ifCurrentUploadDirExists();

    res.send('ok');
};

// POST "/"
export function UploadFile(req, res) {
    /*
    let file = new File(req.file);

    fileDBqueries.saveFileInfoToDB(file.getFullFileInfo());

    res.redirect(`/${file.fileToken}`);
    */
};

// GET "/file/:fileToken"
export function CurrentFile(req, res) {

};

// GET "/files"
export function findAllFiles(req, res) {
    filesModel.find((err, filesList) => {
        (err) ? res.json('ERROR' : err) : res.json(filesList);
    })
};


export function ListOfUserFiles(req, res) {

};

// GET
export function DeleteFile(req, res) {

};
