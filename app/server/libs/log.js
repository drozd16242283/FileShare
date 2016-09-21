import winston from 'winston'

const ENV = process.env.NODE_ENV

const getLogger = (module) => {

    let path = module.filename.split('/').slice(-2).join('/')

    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: (ENV == 'development') ? 'debug' : 'error',
                label: path
            }),
            new winston.transports.File({
                filename: 'error.log',
            })
        ]
    });
}

export default getLogger
