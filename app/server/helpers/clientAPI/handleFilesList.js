const handleFilesList = (parsedJSON) => {
    let cutFileNameString = parsedJSON.map(({fileName}) => {
            const FILE_NAME_LENGTH = fileName.length

            if (FILE_NAME_LENGTH > 25) {
                let begin_str = fileName.slice(0, 20)
                let indexOfEndStr = FILE_NAME_LENGTH - 10
                let end_str = fileName.slice(indexOfEndStr, FILE_NAME_LENGTH)
                return `${begin_str}...${end_str}`
            } else {
                return fileName
            }
        })

    let fileSize  = parsedJSON.map(f => f.fileSize)
    let fileToken = parsedJSON.map(f => f.token)



    return {
        name: cutFileNameString,
        size: fileSize,
        token: fileToken
    }

}

export default handleFilesList
