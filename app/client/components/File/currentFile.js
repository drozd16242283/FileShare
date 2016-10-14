import React from 'react'

import api from '../../api'

const CurrentFile = React.createClass({
    getInitialState() {
        return {
            fileData: {}
        }
    },

    componentDidMount() {
        const that = this

        const fileToken = this.props.params.fileToken
        api.currentFileData(fileToken)
            .then(fileData => {
                that.setState({
                    fileData: fileData
                })
            })
    },

    render() {
        return(
            <div className="container">
                <div className="col-sm-5 col-md-4 col-lg-3">
                    <div className="panel panel-default panel-profile">
                        <div className="panel-heading panel-profile-heading"></div>
                        <div className="panel-body text-center">
                            <div className="avatar-block center-block">
                                <p>User Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7 col-md-8 col-lg-6">
                    <div>
                        <ul className="media-list media-list-users list-group">
                            <li className="list-group-item">
                                <div className="file-show-title">
                                    <p className="lead">{this.state.fileData.fileName}</p>
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
