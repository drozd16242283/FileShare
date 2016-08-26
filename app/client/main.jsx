const React = require('react');
const Header = require('./layouts/header');
const Navigation = require('./layouts/nav');

var mainPage = React.createClass({
    render: function() {
        return(
            <html>
                <Header/>
                <body>
                    <Navigation redirectLink='/' />
                    <h1>Main</h1>
                </body>
            </html>
        );
    }
});

module.exports = mainPage;
