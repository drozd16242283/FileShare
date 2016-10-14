import handleFilesList from '../server/helpers/clientAPI/handleFilesList'

export default {
    allFilesData() {
        return fetch('/api/files')
            .then(resp => resp.json())
            .then(fData => handleFilesList(fData))
    },

    currentFileData(fileToken) {
        return fetch(`/api/${fileToken}`)
            .then(resp => resp.json())
    }
}
