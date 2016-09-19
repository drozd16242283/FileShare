import nconf from 'nconf'

const PATH_TO_CONFIG_FILE = __dirname + '/config.json'


nconf.argv()
    .env()
    .file({file: PATH_TO_CONFIG_FILE})


export default nconf
