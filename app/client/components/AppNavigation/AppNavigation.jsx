import React from 'react'
import { Link } from 'react-router'

import './app.css'

const AppNavigation = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">File Share</Link>
                        </div>
                        <div className="navbar-collapse">
                            <section className="hidden-xs">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/files">Все файлы</Link></li>
                                    <li><Link to="/signup">Зарегистрироваться</Link></li>
                                    <li><Link to="/signin">Войти</Link></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
})

export default AppNavigation
