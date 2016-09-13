import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-inverse navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">File Share</a>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-sm-10 col-xs-6">
                                <div className="navbar-form navbar-right">
                                    <Link className="navLink" to="/files">Все файлы</Link>
                                    <Link className="navLink" to="/signup">Зарегистрироватся</Link>
                                    <Link className="navLink" to="/signin">Войти</Link>
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
});
