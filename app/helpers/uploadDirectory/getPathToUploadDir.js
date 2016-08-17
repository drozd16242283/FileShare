const config = require('../../config');
const currentDate = require('./getCurrendDate');

const uploadDirName = config.get('UploadDir') + '/' + currentDate();

module.exports = uploadDirName;
