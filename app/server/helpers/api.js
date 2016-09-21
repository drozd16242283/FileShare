import axios from 'axios'

var host = 'http://localhost:7777';

exports.get = (url) => {
    return axios({
        url: host+url,
    }).then(function(res) {
        return res.data;
    }
};


exports.post = (url, data) => {
    return axios({
        method: 'post',
        data: data,
        url: host+url
    }).then(function(res) {
            return res.data;
    });
};
