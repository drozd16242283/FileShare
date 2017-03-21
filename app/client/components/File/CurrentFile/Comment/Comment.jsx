import React from 'react'

import './Comment.css'

const Comment = props => {
    return (
        <div>
            <input className="commentInput" type="text" placeholder="Добавить коментарий"></input>
            <button className="btn">Добавить коментарий</button>
        </div>
    )
}

export default Comment
