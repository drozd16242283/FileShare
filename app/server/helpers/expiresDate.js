import date from 'date-fns'

const getExpiresDate = (days) => {
    let currentDate = date.format(new Date(), 'DD-MM-YYYY')

    let expiresDate = date.addDays(currentDate, days)

    return date.format(expiresDate, 'DD-MM-YYYY')
}

export default getExpiresDate
