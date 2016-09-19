import React from 'react'

import needle from 'needle'

export default React.createClass({




    render() {
        return (
            <div>
                <h1>Files Page</h1>
                <button onClick={this.getAllFilesInfo}>Тык!</button>
            </div>
        );
    },

    getAllFilesInfo() {
        needle.get('localhost:8888/api/files', function(err, resp) {
            console.log(resp.body);
        });
    }
})
