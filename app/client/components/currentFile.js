import React from 'react'

export default React.createClass({
    render() {
        return(
            <div>
                <h1>File Page</h1>
                <br />
                <h1>{this.props.params}</h1>
            </div>
        );
    }
})
