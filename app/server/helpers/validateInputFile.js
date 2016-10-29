import FileClass from './fileClass'


const validateInputFile = (file) => {


    return file
}

const createValidFileObject = (reqFile) => {
    const File = new FileClass(validateInputFile(reqFile))

    return File
}

export default createValidFileObject
