import React from 'react'

// Import Components
import Header from './Header'
import Image from './Image'
import FileInfo from './FileInfo'
import DownloadButton from './DownloadButton'
import Comment from './Comment'

import api from '../../../api'

import './currentFile.css'

const CurrentFile = React.createClass({
    getInitialState() {
        return {
            fileInfo: {}
        }
    },

    componentDidMount() {
        const fileToken = this.props.params.fileToken

        api.currentFileInfo(fileToken)
            .then(fileInfo => {
                this.setState({
                    fileInfo: fileInfo
                })
            })
    },

    render() {
        let { fileName, fileDestination, fileSize, fileComment,
              fileToken, downloadLink, isImage, fileOwner, uploadDate } = this.state.fileInfo

        const imageComponent = isImage
            ? <Image fileDest={fileDestination} fileName={fileName} />
            : false

        return (
            <div className="currentFileInfo">
                <Header fileName={fileName} fileOwner={fileOwner} />
                {imageComponent}
                <FileInfo />
                <DownloadButton />
                <Comment />
            </div>
        )
    }
})

export default CurrentFile
