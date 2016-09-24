import React from 'react'

import api from '../api'


export default React.createClass({
    render() {
        var filesList = []
        api.allFilesList(file => {
            file.forEach(f => filesList.push(f))
        })
        return (
            <div>
                <h1>Files Page</h1>
                <button type='submit' onClick={this.handle}>test</button>
                <h2>{filesList}</h2>
            </div>
        );
    }


})
