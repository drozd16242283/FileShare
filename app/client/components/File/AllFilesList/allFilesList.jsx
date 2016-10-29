import React from 'react'

import api from '../../../api'
import FileComponent from './FileComponent'

import { Link } from 'react-router'

import './allFilesList.css'

const AllFilesList = React.createClass({
    getInitialState() {
        return {
            fileName: [],
            fileSize: [],
            fileToken: [],
            search: ''
        }
    },

    componentDidMount() {
        api.allFilesData()
            .then(file => {
                this.setState({
                    fileName: file.name,
                    fileSize: file.size,
                    fileToken: file.token
                })
            })
    },

    _handlerSubmit(val) {
        const search = val.target.value

        if (search.length > 0) {
            this.setState({ search: search })
        }

    },


    render() {
        let { fileName, fileSize, fileToken } = this.state

        return (
            <div className="container filesList">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <h3>Все файлы</h3>
                        <h4>{this.state.search}</h4>
                    </div>
                    <div className="hidden-xs col-sm-6 col-md-offset-2">
                        <form className="form-inline pull-right fileSearchForm">
                            <div className="form-group">
                                <input onChange={this._handlerSubmit}
                                        type="search"
                                        placeholder="Поиск файлов" />
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div>
                    <FileComponent name={fileName}
                                   size={fileSize}
                                   token={fileToken} />
                </div>
            </div>
        )
    }

})

export default AllFilesList
