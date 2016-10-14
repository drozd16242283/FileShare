import React from 'react'

import Navigation from '../layout/NavigationLayout'

(function() {
    fetch('/api/')
})()

const UploadFilePage = React.createClass({

    handleFileSubmit() {
        const input = document.querySelector('input[type="file"]')

        let formData = new FormData()
        formData.append('file', input.files[0])

        fetch('/api/filesUpload', {
            method: 'post',
            body: formData
        })
    },

    render() {
        return (
            <div>
                <div className="formInput">
                    <form encType="multipart/form-data"
                          action="/api/fileUpload"
                          method="post"
                          className="form-horizontal">
                        <input type="file" className="btn btn-primary upload-btn" name="file"/>
                        <button className="btn"
                                type="submit"
                                value="Upload File"
                                name="submit"
                                onClick={this.handleFileSubmit}/>
                        <label>Размер файла не более 50 Мб</label>
                    </form>
                </div>
            </div>
        );
    }
})

export default UploadFilePage
