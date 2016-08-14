var React = require('react');

var Navigation = React.createClass({
    render: function() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-inverse navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href={this.props.redirectLink}>File Share</a>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-sm-10 col-xs-5">
                                <div className="navbar-form navbar-right">
                                    <button className="btn btn-link">
                                        <a href="/signup">Зарегистрироватся</a>
                                    </button>
                                    <button className="btn btn-link">
                                        <a href="/signin">Войти</a>
                                    </button>
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Navigation;
