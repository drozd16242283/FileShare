import React from 'react'
import api from '../../api'
import File from './file'

import { Link } from 'react-router'


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

        api.allFilesData()
            .then(file => {
                that.setState({
                    fileName: file.name,
                    fileSize: file.size,
                    fileToken: file.token
                })
            })
    },

    _handlerSubmit() {

    },

    render() {
        let { fileName, fileSize, fileToken } = this.state

        return (
            <div className="container filesList">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <h3>Все файлы</h3>
                    </div>
                    <div className="hidden-xs col-sm-6 col-md-offset-2">
                        <form className="form-inline pull-right fileSearchForm"
                              onSubmit={this._handlerSubmit}>
                            <div className="form-group">
                                <input type="search" placeholder="Поиск файлов" />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary"
                                    onClick={this._handlerSubmit}>Поиск</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div>
                    <File name={fileName}
                          size={fileSize}
                          token={fileToken} />
                </div>
            </div>
        )
    }

})

export default AllFilesList
