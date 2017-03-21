import React from 'react'

import './Image.css'

const Image = props => {
    return (
        <div className="ImageBlock">
            <img className="imageComponent" src={`${props.fileDest}/${props.fileName}`} />
        </div>
    )
}

export default Image
