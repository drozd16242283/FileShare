import filesModel from '../server/models/fileModel'

import ifCurrentUploadDirExists from '../server/helpers/uploadDirectory/checkIfUploadDirExists'

import File from '../server/helpers/fileClass'


// GET "/"
export function UploadPage(req, res) {

    ifCurrentUploadDirExists();

    res.send('ok');
};

// POST "/"
export function UploadFile(req, res) {

    let file = new File(req.file);

    console.log(req.file);

    res.json('file': req.file);

    //res.redirect(`/${file.fileToken}`);

};

// GET "/:fileToken"
export function CurrentFile(req, res) {
    filesModel.findOne(
        { token: req.params.fileToken },
        { _id: 0, localFileName: 0, filePath: 0, __v: 0 },
        (err, file) => {
            if (err) res.send({ error: "Server Error" })


            if (file !== null) {
                res.json(file)
            } else {
                res.statusCode = 404
                res.send("Файл не найден.")
            }
    })
};

// GET "/files"
export function findAllFiles(req, res) {
    filesModel.find(
        {},
        { _id: 0, fileName: 1, fileSize: 1, token: 1 },
        (err, filesList) => {
        if (err) throw err

        res.json(filesList)
    })
};


export function ListOfUserFiles(req, res) {

};

// GET
export function DeleteFile(req, res) {

};
