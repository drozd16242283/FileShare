import React from 'react'

import path from 'path'

import api from '../../../api'


import './currentFile.css'

const CurrentFile = React.createClass({
    getInitialState() {
        return {
            fileData: {}
        }
    },

    componentDidMount() {
        const fileToken = this.props.params.fileToken

        api.currentFileData(fileToken)
            .then(fileData => {
                this.setState({
                    fileData: fileData
                })
            })
    },

    render() {
        const imgDest  = this.state.fileData.fileDestination
        const fileName = this.state.fileData.localFileName
        const isImage  = this.state.fileData.isImage ? <div><img src={`${imgDest}/${fileName}`}></img></div> : <p>fal</p>

        return(
            <div className="container-fluid fileInfo">
                <div className="row">
                    <div className="hidden-xs col-sm-6 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                        <ul className="media-list">
                            <li className="list-group-item">
                                <div className="file-show-title">
                                    <h3 className="userName">User Name</h3>
                                    <span className="fileName">{this.state.fileData.fileName}</span>
                                </div>
                                <div className="row">
                                    <div className="hidden-xs col-sm-6 col-md-8 col-md-offset-1 col-lg-8">
                                        {isImage}
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
