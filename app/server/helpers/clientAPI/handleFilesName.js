let handleFilesName = (response) => {
    let filesName = JSON.parse(response.body)
        .map(({fileName}) => {

            const FILE_NAME_LENGTH = fileName.length

            if (FILE_NAME_LENGTH > 20) {
                let begin_str = fileName.slice(0, 20)
                let indexOfEndStr = FILE_NAME_LENGTH - 10
                let end_str = fileName.slice(indexOfEndStr, FILE_NAME_LENGTH)
                return `${begin_str}...${end_str}`
            } else {
                return fileName
            }
        })

    return filesName
}

export default handleFilesName
