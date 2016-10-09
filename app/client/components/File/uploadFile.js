import React from 'react'

import Navigation from '../layout/NavigationLayout'


const UploadFilePage = React.createClass({
    render() {
        return (
            <div>
                <div className="formInput">
                    <form encType="multipart/form-data"
                          action="/api/fileUpload"
                          method="post"
                          onSubmit={this.handleSubmit}
                          className="form-horizontal">
                        <input type="file" className="btn btn-primary upload-btn" name="file"/>
                        <button className="btn" type="submit" value="Upload File" name="submit"/>
                        <label>Размер файла не более 50 Мб</label>
                    </form>
                </div>
            </div>
        );
    }
})

export default UploadFilePage
