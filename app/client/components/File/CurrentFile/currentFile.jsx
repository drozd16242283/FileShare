import React from 'react'
import classNames from 'classnames'

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
            ? <div><img src={`${imgDest}/${fileName}`} className="img-responsive" /></div>
            : false

        return imgOrNone
    },

    render() {
        const imageComponent = this.ifImageComponent()

        const filesListClass = classNames(
            'hidden-xs',
            'col-sm-8 col-sm-offset-2',
            'col-md-8 col-md-offset-2',
            'col-lg-6 col-lg-offset-3'
        )
        const fileInfoClass = classNames(
            'file',
            'col-sm-8',
            'col-lg-8'
        )
        const downloadButton = classNames(
            'btn',
            'btn-primary',
            'btn-sm'
        )

        return(
            <div className="container-fluid fileInfo">
                <div className="row">
                    <div className={filesListClass}>
                        <div className="main media">
                            <div className="media-left">
                                <a href="#"><h1>A</h1></a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading fileName">
                                    <span>{this.state.fileInfo.fileName}</span>
                                </h4>
                                <div>
                                    {imageComponent}
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className={fileInfoClass}>
                                        <p>some text example</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className={downloadButton}>Скачать</button>
                            </div>
                            <div className="commentBlock container">
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <input type="search" className="form-control" placeholder="Добавить коментарий"></input>
                                        <button className="addComment btn">Добавить коментарий</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

export default CurrentFile
