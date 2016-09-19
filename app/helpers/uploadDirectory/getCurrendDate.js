/**
* This function returns the currend date (dd-mm-yyyy)
*/
export default currendDate = () => {
    let   date = new Date();

    // day
    let   dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    // month
    let   mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    // year
    let   yyyy = date.getFullYear();

    // Together
    let currDate = dd + '-' + mm + '-' + yyyy;

    return currDate;
}
