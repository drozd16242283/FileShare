const config = require('../../config');
const currentDate = require('./getCurrendDate');


var uploadDirName = config.get('UploadDir') + '/' + currentDate();


module.exports = uploadDirName;
