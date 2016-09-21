import path from 'path'
import config from '../../config/'
import currentDate from './getCurrentDate'


const uploadDir = `${config.get('UploadDir')}/${currentDate()}`

const currentUploadDirectory = path.join(__dirname, `../../../../${uploadDir}`);


export default currentUploadDirectory
