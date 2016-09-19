import config from '../../config/'
import currentDate from './getCurrendDate'


const uploadDirName = `../${config.get('UploadDir')}/${currentDate()}`;


module.exports = uploadDirName;
