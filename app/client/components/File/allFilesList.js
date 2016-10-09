import React from 'react'

//import {fetch} from 'whatwg-fetch'

import File from './file'
import api from '../../api'


const AllFilesList = React.createClass({
    getInitialState() {
        return {
            fileName: [],
            fileSize: [],
            fileToken: []
        }
    },


    // Fetch json data from API
    componentDidMount() {
        const that = this
        api.allFilesList()
            .then(file => {
                that.setState({
                    fileName: file.fileName,
                    fileSize: file.fileSize,
                    fileToken: file.fileToken
                })
            })
    },

    render() {
        let { fileName, fileSize, fileToken } = this.state

        return (
            <div>
                <File name={fileName}
                      size={fileSize}
                      token={fileToken} />
            </div>
        )
    }

})

export default AllFilesList
