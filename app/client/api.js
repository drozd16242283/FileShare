import xhr from 'xhr'

const API_PREFIX = 'http://localhost:7777/api'

export default {
    allFilesList(cb) {
        xhr(`${API_PREFIX}/files`, (err, resp) => {
            let filesName = JSON.parse(resp.body)
                .map(file => file.fileName)

            cb(filesName)
        })
    }
}
