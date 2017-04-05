import filesModel from '../server/models/fileModel'
import createUploadDirectory from '../server/helpers/uploadDirectory/createUploadDirectory'
import multer from '../server/libs/multer'
import validateInputFile from '../server/helpers/validateInputFile'
import expiresDate from '../server/helpers/expiresDate'

import config from '../server/config'


const SITE_NAME = config.get('siteName')

// GET "/"
export function UploadPage(req, res) {
    createUploadDirectory()

    res.sendStatus(200)
}

// POST "/"
export function UploadFile(req, res) {
    multer(req,res, (err) => {
        if (err) res.sendStatus(503)

        //const ValidFileInfo = validateInputFile(req.file)
        const file = validateInputFile(req.file)

        let newFile = new filesModel(file.getFullFileInfo())

        if (req.session.user) {
          const STORAGE_DAYS = config.get('filesStorageDaysWithRegister')

          newFile.fileOwner = req.session.user
          newFile.expiresDate = expiresDate(STORAGE_DAYS)
        }

        newFile.save(err => {
            if (err) res.sendStatus(500)

            res.redirect(`${SITE_NAME}/${file.fileToken}`)
        })
    })
}

// GET "/:fileToken"
export function CurrentFile(req, res) {
    filesModel.findOne(
        { fileToken: req.params.fileToken },
        { _id: 0, filePath: 0, expiresDate: 0, __v: 0 },
        (err, file) => {
            if (err) res.sendStatus(500)

            let response = (file !== null) ? file : 'Файл не найден.'

            res.json(response)
    })
}

// GET "/files"
export function findAllFiles(req, res) {
    filesModel.find({},
        { _id: 0, fileName: 1, fileSize: 1, fileToken: 1 },
        (err, filesList) => {
            if (err) res.sendStatus(500)

            res.json(filesList)
    })
    .sort({ _id: -1 })
    .limit(20)
}

// POST "/signup"
export function SignUp(req, res) {
    console.log(req.session)

    res.redirect('/')
}

// POST "/signin"
export function SignIn(req, res) {
    console.log(req.session)

    res.redirect('/')
}

export function ListOfUserFiles(req, res) {

}

// GET
export function DeleteFile(req, res) {

}
