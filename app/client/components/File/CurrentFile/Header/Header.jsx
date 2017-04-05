import React from 'react'

import './Header.css'

const Header = props => {
    return (
        <div className="header">
            <div className="userNameLogo">
                <h3>A</h3>
            </div>
            <h5 className="fileOwner">{props.fileOwner}</h5>
            <h3 className="fileName">{props.fileName}</h3>

        </div>
    )

}

export default Header
