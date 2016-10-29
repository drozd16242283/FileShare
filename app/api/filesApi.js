import filesModel from '../server/models/fileModel'

import ifCurrentUploadDirExists from '../server/helpers/uploadDirectory/checkIfUploadDirExists'

import multer from '../server/config/multer'

import validateInputFile from '../server/helpers/validateInputFile'


// GET "/"
export function UploadPage(req, res) {
    ifCurrentUploadDirExists()

    res.sendStatus(200)
}

// POST "/"
export function UploadFile(req, res) {
    multer(req,res, (err) => {
        if (err) res.end("Ошибка загрузки файла!")

        //const ValidFileInfo = validateInputFile(req.file)

        const file = validateInputFile(req.file)

        let newFile = new filesModel(file.getFullFileInfo())
        newFile.save(err => {
            if (err) res.end("Ошибка базы данных")

            res.redirect(`http://localhost:7777/${file.fileToken}`)
        })
    })
}

// GET "/:fileToken"
export function CurrentFile(req, res) {
    filesModel.findOne(
        { fileToken: req.params.fileToken },
        { _id: 0, localFileName: 0, filePath: 0, __v: 0 },
        (err, file) => {
            if (err) res.send({ error: "Server Error" })

            let response = (file !== null) ? file : 'Файл не найден.'

            res.json(response)
    })
}

// GET "/files"
export function findAllFiles(req, res) {
    filesModel.find({},
        { _id: 0, fileName: 1, fileSize: 1, fileToken: 1 },
        (err, filesList) => {
            if (err) res.end('Server Error')

            res.json(filesList)
    })
    .sort({ _id: -1 })
    .limit(20)
}


export function ListOfUserFiles(req, res) {

};

// GET
export function DeleteFile(req, res) {

};
