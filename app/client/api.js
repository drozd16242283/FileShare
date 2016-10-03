import Promise from 'bluebird'
import xhr from 'xhr'

import handleFilesName from '../server/helpers/clientAPI/handleFilesName'

const API_PREFIX = 'http://localhost:7777/api'

export default {
    allFilesListPromise() {
        return new Promise((resolve, reject) => {
            xhr(`${API_PREFIX}/files`, (err, resp) => {
                if (err) reject(err)

                /*let filesData = JSON.parse(resp.body)
                    .map(file => {
                        return [
                            file.fileName,
                            file.fileSize,
                            file.downloadLink
                        ]
                    })*/

                let filesName = handleFilesName(resp);


                resolve(filesName)
            })
        })
    }
}
