var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>File Share</title>

                <link rel="stylesheet" href="css/style/main.css"/>
                <link rel="stylesheet" href="css/bootstrap.min.css"/>
                <link rel="stylesheet" href="css/font-awesome.min.css"/>
            </head>
        );
    }
});


module.exports = Header;
