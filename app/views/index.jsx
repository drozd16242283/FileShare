const React = require('react');
const Header = require('./layouts/header');
const Navigation = require('./layouts/nav');
const Footer = require('./layouts/footer');


var IndexPage = React.createClass({
    render: function() {

        var errorMessage = this.props.error;

        return (
            <html>
                <Header/>
                    <body>
                        <Navigation redirectLink='/main'/>
                            <div className="formInput">
                                <div className="alert">{errorMessage}</div>
                                <form action="/" encType="multipart/form-data" method="post" className="form-horizontal">
                                    <input type="file" className="btn btn-primary upload-btn" name="file"/>
                                    <button className="btn" type="submit" value="Upload File" name="submit"/>
                                    <label>Размер файла не более 50 Мб</label>
                                </form>
                            </div>
                        <Footer/>
                    </body>
            </html>
        );
    }
});

module.exports = IndexPage;
