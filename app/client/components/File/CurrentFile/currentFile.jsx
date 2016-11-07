import React from 'react'

import path from 'path'

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

    ifImageComponent() {
        const imgDest  = this.state.fileInfo.fileDestination
        const fileName = this.state.fileInfo.localFileName
        const isImage  = this.state.fileInfo.isImage

        const imgOrNone = isImage
            ? <div><img src={`${imgDest}/${fileName}`} /></div>
            : false

        return imgOrNone
    },

    render() {
        const img = this.ifImageComponent()

        return(
            <div className="container-fluid fileInfo">
                <div className="row">
                    <div className="hidden-xs col-sm-6 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                        <ul className="media-list">
                            <li className="list-group-item">
                                <div className="file-show-title">
                                    <h3 className="userName">User Name</h3>
                                    <span className="fileName">{this.state.fileInfo.fileName}</span>
                                </div>
                                <div className="row">
                                    <div className="hidden-xs col-sm-6 col-md-8 col-md-offset-1 col-lg-8">
                                        {img}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
})

export default CurrentFile
