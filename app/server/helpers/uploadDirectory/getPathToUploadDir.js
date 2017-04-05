import path from 'path'
import format from 'date-fns/format'
import config from '../../config/'


let currentDate = format(new Date(), 'DD-MM-YYYY')

const uploadDirName = `${config.get('UploadDir')}/${currentDate}`

const currentUploadDirectory = path.join(__dirname, `../../../public/${uploadDirName}`)


export default currentUploadDirectory
