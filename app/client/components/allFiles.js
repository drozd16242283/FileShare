import React from 'react'

import api from '../api'


export default React.createClass({
    getInitialState() {
        return {
            filesName: []
        }
    },

    componentDidMount() {
        const that = this;
        api.allFilesListPromise()
            .then(file => {
                console.log(file)
                that.setState({
                    filesName: file
                })
            })
    },

    render() {
        var fileNames = this.state.filesName
            .map(names => {
                //console.log(names.length)

                return names
            })

        return (
                <ul>
                    {
                        fileNames.map(name =>
                            <li>{name}<br /></li>
                        )
                    }
                </ul>
        );
    }

})
