import React from 'react'
import Link from 'react-router/lib/Link'

import './FileComponent.css'

const FileComponent = React.createClass({
    propTypes: {
        name: React.PropTypes.array,
        size: React.PropTypes.array,
        token: React.PropTypes.array
    },

    render() {
        let { name, size, token } = this.props

        return (
            <ul>
                {
                    token.map((t, i) =>
                        <li className="files" key={i}>
                            <Link to={t}>
                                {name[i]}
                            </Link>
                            &nbsp;&nbsp;
                            {size[i]}
                        </li>
                    )
                }
            </ul>
        )
    }
})

export default FileComponent
