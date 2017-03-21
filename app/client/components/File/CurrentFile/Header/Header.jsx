import React from 'react'

import './Header.css'

const Header = props => {
    return (
        <div className="header">
            <div className="userNameLogo">
                <h3>A</h3>
            </div>
            <div className="headerFileInfo">
                <h5>{props.fileOwner}</h5>
                <p>{props.fileName}</p>
            </div>
        </div>
    )

}

export default Header
