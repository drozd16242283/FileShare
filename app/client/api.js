import Promise from 'bluebird'
import xhr from 'xhr'

import handleFilesList from '../server/helpers/clientAPI/handleFilesList'

const API_PREFIX = 'http://localhost:7777/api'

export default {
    allFilesList() {
        return new Promise((resolve, reject) => {
            xhr(`${API_PREFIX}/files`, (err, resp) => {
                if (err) reject(err)

                let filesList = handleFilesList(resp)

                resolve(filesList)
            })
        })
    },

    currentFileData(fileToken) {
        return fetch(`/api/${fileToken}`)
            .then(resp => resp.json())
    }
}
