var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer className="footer">

                <div className="footer-text">
                    <p>&copy; 2016 Oleg Drozd</p>
                </div>

                <script src="js/bootstrap.min.js"></script>
            </footer>
        );
    }
});


module.exports = Footer;
